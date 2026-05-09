import { createContext, useContext, useState } from 'react';

const STORAGE_KEY = 'due_profile';
const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  const saveProfile = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setProfile(data);
  };

  const deleteProfile = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProfile(null);
  };

  return (
    <ProfileContext.Provider value={{ profile, saveProfile, deleteProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() { return useContext(ProfileContext); }
