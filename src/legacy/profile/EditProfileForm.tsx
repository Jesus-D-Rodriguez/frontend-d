import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const EditProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [profile, setProfile] = useState({
    user: {
      email: "",
      id: null,
      name: "",
      role: "",
    },
    image: "",
    description: "",
  });
  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files?.[0]) {
      setImage(event?.target?.files?.[0]);
    }
  };

  const onSubmitForm = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      console.log(profile);
    } catch (error) {
      console.log("hello");
    }
  };

  return (
    <Box>
      <form onSubmit={onSubmitForm}>
        <TextField
          id="name"
          name="name"
          value={profile.user.name}
          label="Nombre"
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          id="email"
          name="email"
          value={profile.user.email}
          label="Email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput
            id="fileInputElement"
            type="file"
            onChange={onImageChange}
          />
        </Button>

        <Button variant="outlined" type="submit">
          Confirmar
        </Button>
        <Link to={`/profile/1`}>Regresar</Link>
      </form>
    </Box>
  );
};

export default EditProfileForm;
