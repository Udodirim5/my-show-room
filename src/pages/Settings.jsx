import styled from "styled-components";
import { useState, useRef } from "react";
import {
  FiUpload,
  FiUser,
  FiEdit2,
  FiSave,
  FiLock,
  FiMail,
  FiGlobe,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { personalInfo } from "../../data/data";
import { useTheme } from "../contexts/ThemeContext";

const Settings = () => {
  const [formData, setFormData] = useState(personalInfo);
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(
    "/images/my_pic.jpg"
  );
  const fileInputRef = useRef(null);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Settings saved:", { ...formData, profileImage });
    alert("Settings saved successfully!");
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <SettingsContainer>
        <SettingsHeader>
          <h2>Profile Settings</h2>
          <p>Update your personal information and preferences</p>
        </SettingsHeader>

        <SettingsForm onSubmit={handleSubmit}>
          <ProfileImageSection>
            <ImagePreview>
              <img src={previewImage} alt="Profile preview" />
              <ImageOverlay onClick={() => fileInputRef.current.click()}>
                <FiUpload size={24} />
                <span>Change Photo</span>
              </ImageOverlay>
            </ImagePreview>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: "none" }}
            />
            <ImageTips>
              <p>• Use a high-quality image</p>
              <p>• Recommended size: 400x400px</p>
              <p>• Formats: JPG, PNG, or GIF</p>
            </ImageTips>
          </ProfileImageSection>
        </SettingsForm>


{/*                             1 */}
          <SettingsForm onSubmit={handleSubmit}>
          <FormSection>
            <FormGroup>
              <label>
                <FiUser /> Display Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </FormGroup>

            <FormGroup>
              <label>
                <FiEdit2 /> Professional Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Your professional title"
              />
            </FormGroup>

            <FormGroup>
              <label>
                <FiEdit2 /> Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell people about yourself"
                rows="4"
              />
            </FormGroup>
          </FormSection>
            <SaveButton type="submit"><FiSave /> Save Changes</SaveButton>
          </SettingsForm>

{/*                           2 */}
          <SettingsForm onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>Contact Information</SectionTitle>
            <FormGroup>
              <label>
                <FiMail /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
              />
            </FormGroup>

            <FormGroup>
              <label>
                <FiGlobe /> Website
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Your personal website"
              />
            </FormGroup>
          </FormSection>
            <SaveButton type="submit"><FiSave /> Save Changes</SaveButton>
          </SettingsForm>


          {/*           3 */}

          <SettingsForm onSubmit={handleResetPassword}>
          <FormSection>
            <SectionTitle>Security</SectionTitle>
            <FormGroup>
              <label>
                <FiLock /> Current Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter current password"
              />
            </FormGroup>

            <FormGroup>
              <label>
                <FiLock /> New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
              />
            </FormGroup>
          </FormSection>
          <SaveButton type="submit"><FiSave /> Save Changes</SaveButton>
          </SettingsForm>

      </SettingsContainer>

      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </ThemeToggle>
    </>
  );
};

export default Settings;

// Styled Components
const SettingsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const SettingsHeader = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.primaryText};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 0.95rem;
  }
`;

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 4rem;
  border-bottom:2px solid ${({ theme }) => theme.text};
`;

const ProfileImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const ImagePreview = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImagePreview}:hover & {
    opacity: 1;
  }

  svg {
    margin-bottom: 0.5rem;
  }
`;

const ImageTips = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.85rem;
  line-height: 1.6;
`;

const FormSection = styled.div`
  background: ${({ theme }) => theme.sectionBg};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primaryText};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.primaryText};
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 8px;
    font-size: 0.95rem;
    background: ${({ theme }) => theme.inputBg};
    color: ${({ theme }) => theme.primaryText};
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.primary + "20"};
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 0.5rem;
  padding: 0.9rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.buttonText};
  background: ${({ theme }) => theme.text};
  
  &:hover {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.inputText};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0) 45%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 55%
    );
    transform: translateX(-100%) rotate(15deg);
  }

  &:hover::after {
    animation: shine 1.5s infinite;
  }

  @keyframes shine {
    100% {
      transform: translateX(100%) rotate(15deg);
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  position: absolute;
  top: 1.3rem;
  right: 1.3rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
