
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, email, role")
      .eq("id", userId)
      .single();

    if (error) {
      setProfile(null);
      return null;
    }

    setProfile(data);
    return data;
  };

  useEffect(() => {
    let active = true;

    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (!active) return;

      setUser(data.session?.user ?? null);

      if (data.session?.user) {
        await fetchProfile(data.session.user.id);
      }

      if (active) setLoading(false);
    };

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;

      setUser(session?.user ?? null);

      if (!session) {
        setProfile(null);
        setLoading(false);
      } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        // Profile is fetched outside the auth callback.
        setLoading(true);
        Promise.resolve().then(async () => {
          if (active) {
            await fetchProfile(session.user.id);
            if (active) setLoading(false);
          }
        });
      }
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    const profileData = await fetchProfile(data.user.id);

    if (!profileData) {
      await supabase.auth.signOut();
      throw new Error("User profile not found. Contact administrator.");
    }

    return profileData;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
