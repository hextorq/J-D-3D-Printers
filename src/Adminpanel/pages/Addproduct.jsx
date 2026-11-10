
import { useState } from "react";
import { supabase } from "../../supabase";

export default function ProductForm({ onClose }) {

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("products")
      .insert({
        name: formData.name,
        price: Number(formData.price),
        description: formData.description
      });

    if (error) {
      return;
    }

    alert("Product added successfully!");

    setFormData({
      name: "",
      price: "",
      description: ""
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-[#8b5558] p-6 rounded-xl shadow-xl w-full max-w-md">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Product</h2>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 text-xl"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >

          <input
            name="name"
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
            className="border p-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-[#722f37] text-white p-2 rounded"
          >
            Save Product
          </button>

        </form>
      </div>
    </div>
  );
}
