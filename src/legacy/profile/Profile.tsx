import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useCallback, useEffect, useState } from "react";
import RenderSkills from "./RenderSkills";
import RenderExperiences from "./RenderExperiences";
import { Link } from "react-router-dom";
import { fetchOneProfile } from "../services/profile.service";

const Profile = () => {
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

  const getProfile = useCallback(async () => {
    const { data } = await fetchOneProfile(2);
    setProfile(data);
  }, []);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <Box sx={{ margin: "10px" }}>
      <Typography variant="h3">Perfil:</Typography>
      <Link to={`/profile/edit/${profile.user.id}`}> Editar Perfil </Link>

      <Typography variant="h4">Nombre:</Typography>
      <Typography variant="h6">{profile.user.name}</Typography>
      <Box
        component="img"
        sx={{ height: 100, width: 100, maxHeight: 100, maxWidth: 100 }}
        src={profile.image}
        alt={profile.user.name}
      />

      <Typography variant="h4">Email:</Typography>
      <Typography variant="h6">{profile.user.email}</Typography>

      <Typography variant="h6">{profile.description}</Typography>

      <Typography variant="h4">Habilidades:</Typography>
      <RenderSkills />

      <Typography variant="h4">Experiencia:</Typography>
      <RenderExperiences />
      <Link to="/dashboard"> Regresar </Link>
    </Box>
  );
};

export default Profile;
