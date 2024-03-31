import React from "react";
import "./TemplateTwo.scss";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { ButtonPrimary } from "../Button/Button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function TemplatesTwoComponent({ formData, current }) {
  const generatePDF = () => {
    const capture = document.querySelector(".template_two");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      const Componentwidth = doc.internal.pageSize.getWidth();
      const Componentheight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, Componentwidth, Componentheight);
      doc.save(`CV-resume.pdf`);
    });
  };
  return (
    <div className="tamplate_saveButton">
      <span>See the preview and save as PDF</span>
      <div className="template_two">
        <Document>
          <Page size="A4" className="template_two__page">
            <View className="template_two__page__header">
              <View className="template_two__page__header__first">
                <Text className="template_two__page__header__first__name">
                  {formData.heading.full_name && formData.heading.full_name}
                </Text>
                <Text className="template_two__page__header__first__role">
                  {formData.heading.job_position &&
                    formData.heading.job_position}
                </Text>
              </View>
              <View className="template_two__page__header__second">
                <Text>•{formData.heading.email && formData.heading.email}</Text>
                <Text>
                  •{formData.heading.country && formData.heading.country},{" "}
                  {formData.heading.city && formData.heading.city}, {"Pincode-"}
                  {formData.heading.pin_code && formData.heading.pin_code}
                </Text>
                <Text>
                  •Phone-{formData.heading.phone && formData.heading.phone}
                </Text>
              </View>
            </View>
            <div className="divider"></div>
            <View className="template_two__page__body">
              <View className="template_two__page__body__section">
                <Text className="headingText">Professional Summary</Text>
                <Text className="contentText">{formData.reume_summary}</Text>
              </View>
              <div className="divider"></div>
              <View className="template_two__page__body__section">
                <Text className="headingText">Key Skills</Text>
                <View className="grid">
                  {formData.skills &&
                    formData.skills.map((skill, index) => (
                      <Text key={index} className="grid">
                        {`•${skill}`}
                      </Text>
                    ))}
                </View>
              </View>
              <div className="divider"></div>
              <View className="template_two__page__body__section">
                <Text className="headingText">Work History</Text>
                {formData.work_experience &&
                  formData.work_experience.map((exp, index) => (
                    <View key={index} className="contentText">
                      <Text
                        style={{
                          fontWeight: "550",
                          fontSize: "18px",
                          letterSpacing: "2px",
                        }}
                      >
                        • {exp.company}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "400",
                          fontSize: "14px",
                          letterSpacing: "2px",
                        }}
                      >
                        {exp.role_summary}
                      </Text>
                      <Text>
                        {exp.startYear}
                        {exp.still_working_here === false &&
                          ` to ${exp.endYear}`}
                      </Text>
                    </View>
                  ))}
              </View>
              <div className="divider"></div>
              <View className="template_two__page__body__section">
                <Text className="headingText">Education</Text>
                <View className="grid">
                  {formData.education &&
                    formData.education.map((edu, index) => (
                      <View key={index} className="contentText">
                        <Text
                          style={{
                            fontWeight: "550",
                            fontSize: "18px",
                            letterSpacing: "2px",
                          }}
                        >
                          • {edu.degree}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "400",
                            fontSize: "14px",
                            letterSpacing: "2px",
                          }}
                        >
                          {edu.school_college}
                        </Text>
                        <Text>{`${edu.startYear} to ${edu.endYear}`}</Text>
                      </View>
                    ))}
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </div>
      {current === 6 && <ButtonPrimary text="Save" onClick={generatePDF} />}
    </div>
  );
}
