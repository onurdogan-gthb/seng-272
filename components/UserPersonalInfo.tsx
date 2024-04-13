import { useTemplateStore } from "@/store/templateStore";
import useInfoStore from "@/store/infoStore";
import useCustomizationStore from "@/store/customizationStore";

const UserPersonalInfo = () => {
  const {
    signOff,
    fullName,
    jobTitle,
    company,
    workAddress,
    phoneNumber,
    workEmail,
    website,
  } = useInfoStore();
  const { template } = useTemplateStore();
  const { fontName, fontSize, linkColor, textColor, emailColor, nameColor } =
    useCustomizationStore();

  const widthLeft = {
    xlScreen: {
      width: "180px",
    },
    smallScreen: {
      width: "180px",
    },
    mediumScreen: {
      width: "180px",
    },
    largeScreen: {
      width: "180px",
    },
  };
  const widthRight = {
    xlScreen: {
      maxWidth: "180px",
    },
    smallScreen: {
      maxWidth: "180px",
    },
    mediumScreen: {
      maxWidth: "180px",
    },
    largeScreen: {
      maxWidth: "180px",
    },
  };

  let selectedWidthRight = widthRight.xlScreen;
  let selectedWidthLeft = widthLeft.xlScreen;

  if (window.innerWidth < 768) {
    selectedWidthLeft = widthLeft.smallScreen;
  } else if (window.innerWidth < 1024) {
    selectedWidthLeft = widthLeft.mediumScreen;
  } else if (window.innerWidth < 1440) {
    selectedWidthLeft = widthLeft.largeScreen;
  } else {
    selectedWidthLeft = widthLeft.xlScreen;
  }

  if (window.innerWidth < 768) {
    selectedWidthRight = widthRight.smallScreen;
  } else if (window.innerWidth < 1024) {
    selectedWidthRight = widthRight.mediumScreen;
  } else if (window.innerWidth < 1440) {
    selectedWidthRight = widthRight.largeScreen;
  } else {
    selectedWidthRight = widthRight.xlScreen;
  }

  if (template.id === "plainText") {
    return (
      <div
        style={{
          textSizeAdjust: "13px",
          color: "default",
          fontFamily: "sans-serif",
        }}
      >
        {signOff}
        <br />
        {fullName}
        <br />
        {jobTitle} | {company} <br />
        {phoneNumber}
        <br />
        {workEmail}
        <br />
        {workAddress}
        <br />
        {website}
      </div>
    );
  } else {
    return (
      <>
        <tr
          style={{
            color: textColor,
            fontSize: `${fontSize}px`,
            fontFamily: fontName,
          }}
        >
          <td style={{ paddingBottom: "4px" }}>{signOff}</td>
        </tr>
        <tr
          style={{
            color: textColor,
            fontSize: `${fontSize}px`,
            fontFamily: fontName,
          }}
        >
          <td style={{ color: nameColor, paddingBottom: "4px" }}>{fullName}</td>
        </tr>
        <tr
          style={{
            borderBottom: "1px solid #868E96",
            paddingBottom: "4px",
          }}
        >
          <td>
            <table
              style={{
                color: textColor,
                fontSize: `${fontSize}px`,
                fontFamily: fontName,
              }}
            >
              <tbody>
                <tr>
                  <td>{jobTitle}</td>
                  <td style={{ paddingLeft: "4px", paddingRight: "4px" }}>|</td>
                  <td>{company}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr
          style={{
            paddingTop: "4px",
            color: textColor,
            fontSize: `${fontSize}px`,
            fontFamily: fontName,
          }}
        >
          <td>
            <table>
              <tbody>
                <tr>
                  {phoneNumber && (
                    <td>
                      <img
                        src="https://i.imgur.com/m6mkG6W.png"
                        width={14}
                        height={14}
                        alt="Phone Number"
                        style={{ marginRight: "6px" }}
                      />
                    </td>
                  )}
                  {phoneNumber && (
                    <td
                      style={{
                        paddingRight: "10px",
                        wordBreak: "break-word",
                        ...selectedWidthLeft,
                      }}
                    >
                      {phoneNumber}
                    </td>
                  )}
                  {workEmail && (
                    <td>
                      <img
                        src="https://i.imgur.com/JTfwuQG.png"
                        width={14}
                        height={14}
                        alt="Email"
                        style={{ marginRight: "6px" }}
                      />
                    </td>
                  )}
                  {workEmail && (
                    <td
                      style={{ wordBreak: "break-word", ...selectedWidthRight }}
                    >
                      <a
                        href={"mailto:" + workEmail}
                        style={{ color: emailColor, textDecoration: "none" }}
                      >
                        {workEmail}
                      </a>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr
          style={{
            paddingTop: "4px",
            color: textColor,
            fontSize: `${fontSize}px`,
            fontFamily: fontName,
          }}
        >
          <td>
            <table>
              <tbody>
                <tr>
                  {workAddress && (
                    <td>
                      <img
                        src="https://i.imgur.com/1BFyCw1.png"
                        width={14}
                        height={14}
                        alt="Address"
                        style={{ marginRight: "6px" }}
                      />
                    </td>
                  )}
                  {workAddress && (
                    <td
                      style={{
                        paddingRight: "10px",
                        wordBreak: "break-word",
                        ...selectedWidthLeft,
                      }}
                    >
                      {workAddress}
                    </td>
                  )}
                  {website && (
                    <td>
                      <img
                        src="https://i.imgur.com/HLoZI2E.png"
                        width={14}
                        height={14}
                        alt="Website"
                        style={{ marginRight: "6px" }}
                      />
                    </td>
                  )}
                  {website && (
                    <td>
                      <a
                        href={website}
                        style={{
                          color: linkColor,
                          textDecoration: "none",
                          wordBreak: "break-word",
                          ...selectedWidthRight,
                        }}
                      >
                        {website}
                      </a>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </>
    );
  }
};

export default UserPersonalInfo;
