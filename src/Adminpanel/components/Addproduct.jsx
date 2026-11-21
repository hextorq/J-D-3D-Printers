import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import STLViewer from "../../Components/STLViewer";

const EMPTY_FORM = { name: "", category: "", price: "", description: "", image: "", model: "" };

const uploadFile = async (file, bucket) => {
  if (!file) return "";
  const extension = file.name.split(".").pop()?.toLowerCase() || "bin";
  const path = `${crypto.randomUUID()}.${extension}`;
  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw error;
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
};

export default function ProductForm({ onClose, onSaved, product = null }) {
  const [contentType, setContentType] = useState(product?.model ? "custom3d" : "product");
  const [formData, setFormData] = useState({ ...EMPTY_FORM, ...product });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(product?.model || product?.image || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isEditing = Boolean(product?.id);
  const isCustom3d = contentType === "custom3d";

  useEffect(() => {
    setContentType(product?.model ? "custom3d" : "product");
    setFormData({ ...EMPTY_FORM, ...product });
    setSelectedFile(null);
    setPreviewUrl(product?.model || product?.image || "");
    setError("");
  }, [product]);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(isCustom3d ? formData.model || "" : formData.image || "");
      return undefined;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, isCustom3d, formData.image]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleTypeChange = (event) => {
    setContentType(event.target.value);
    setSelectedFile(null);
    setError("");
  };

  const handleFileChange = (file) => {
    if (!file) return;
    setSelectedFile(file);
    setError("");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFileChange(event.dataTransfer.files?.[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      let image = formData.image || "";
      let model = formData.model || "";
      if (selectedFile) {
        if (isCustom3d) model = await uploadFile(selectedFile, "custom3d-models");
        else image = await uploadFile(selectedFile, "product-images");
      }

      const values = {
        name: formData.name.trim(),
        category: formData.category.trim(),
        price: Number(formData.price),
        description: formData.description.trim(),
      };
      const table = isCustom3d ? "custom3d_stl" : "products";
      const payload = isCustom3d ? { ...values, model } : { ...values, image };
      const query = supabase.from(table);
      const result = isEditing
        ? await query.update(payload).eq("id", product.id)
        : await query.insert(payload);
      if (result.error) throw result.error;

      alert(`${isCustom3d ? "Custom 3D item" : "Product"} ${isEditing ? "updated" : "added"} successfully!`);
      onSaved?.();
      onClose();
    } catch (submitError) {
      setError(submitError.message || "Unable to save this item.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-modal fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="admin-form-modal w-full max-w-md rounded-xl bg-[#8b5558] p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold">{isEditing ? "Edit item" : "Add item"}</h2>
          <button type="button" onClick={onClose} className="text-xl" aria-label="Close form">✕</button>
        </div>

        {!isEditing && (
          <div className="admin-form-toggle mb-4" role="group" aria-label="Content type">
            <label><input type="radio" name="contentType" value="product" checked={!isCustom3d} onChange={handleTypeChange} /> <span>Product</span></label>
            <label><input type="radio" name="contentType" value="custom3d" checked={isCustom3d} onChange={handleTypeChange} /> <span>Custom 3D</span></label>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div
            className={`admin-upload-zone ${previewUrl && !isCustom3d ? "has-preview" : ""}`}
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
          >
            {previewUrl && isCustom3d && (
              <div className="admin-upload-stl-preview">
                <STLViewer src={previewUrl} alt="Selected custom 3D model preview" />
              </div>
            )}
            {previewUrl && !isCustom3d && (
              <img className="admin-upload-preview" src={previewUrl} alt="Selected product preview" />
            )}
            <strong>{isCustom3d ? "Upload Custom 3D model" : "Upload product image"}</strong>
            <span>{isCustom3d ? "Drop an STL file here, or browse" : "Drop your image here, or browse"}</span>
            <small>{isCustom3d ? "Supports STL" : "Supports PNG, JPG, JPEG, WEBP"}</small>
            <label className="admin-upload-button">
              Browse files
              <input
                type="file"
                accept={isCustom3d ? ".stl,model/stl" : "image/*"}
                onChange={(event) => handleFileChange(event.target.files?.[0])}
                required={!isEditing && !formData.image && !formData.model}
              />
            </label>
            {selectedFile && <small className="admin-upload-filename">{selectedFile.name}</small>}
          </div>

          <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required className="border p-2 rounded" />
          <input name="category" type="text" placeholder="Category" value={formData.category} onChange={handleChange} required className="border p-2 rounded" />
          <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} min="0" step="0.01" required className="border p-2 rounded" />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required className="border p-2 rounded" />
          {error && <p className="text-sm text-red-200" role="alert">{error}</p>}
          <button type="submit" disabled={loading} className="bg-[#722f37] text-white p-2 rounded disabled:opacity-60">
            {loading ? "Saving..." : isEditing ? "Update item" : `Save ${isCustom3d ? "Custom 3D" : "Product"}`}
          </button>
        </form>
      </div>
    </div>
  );
}
