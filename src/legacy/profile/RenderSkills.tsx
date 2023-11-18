import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SkillInterface } from "./interfaces/Interfaces";

const RenderSkills = () => {
  const skills: SkillInterface[] = [
    {
      id: 1,
      name: "Desarrollador Front-end",
    },
    {
      id: 2,
      name: "Desarrollador Back-end",
    },
    {
      id: 3,
      name: "React",
    },
    {
      id: 4,
      name: "TypeScript",
    },
  ];
  return (
    <Box>
      {skills.map((item: SkillInterface) => (
        <Typography key={item.id} variant="h6">
          {item.name}
        </Typography>
      ))}
    </Box>
  );
};

export default RenderSkills;