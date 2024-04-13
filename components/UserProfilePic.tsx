import React from "react";

import { useTemplateStore } from "@/store/templateStore";
import useInfoStore from "@/store/infoStore";
import useCustomizationStore from "@/store/customizationStore";

const UserProfilePic = () => {
  const { template } = useTemplateStore();
  const { imageURL } = useInfoStore();
  const { imageSize } = useCustomizationStore();

  if (template.id === "plainText") {
    return null;
  }

  return (
    <>
      <img
        src={imageURL}
        alt="Profile Image"
        style={{
          overflow: "hidden",
          position: "relative",
          width: `${imageSize}px`,
          height: `${imageSize}px`,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </>
  );
};

export default UserProfilePic;
