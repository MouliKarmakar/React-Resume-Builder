import React from "react";
import "./TemplateOne.scss";
// import { formData } from "../../Constant/formData";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { ButtonPrimary } from "../Button/Button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function TemplatesOneComponent({ formData, current }) {
  const generatePDF = () => {
    const capture = document.querySelector(".template_one");
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
      <div className="template_one">
        <Document>
          <Page size="A4" className="template_one__page">
            <View className="template_one__page__header">
              <View className="template_one__page__header__part_1">
                <Text className="template_one__page__header__part_1__name">
                  {formData.heading.full_name && formData.heading.full_name}
                </Text>
                <Text className="template_one__page__header__part_1__role">
                  {formData.heading.job_position &&
                    formData.heading.job_position}
                </Text>
              </View>
              <View className="template_one__page__header__part_2">
                <Text className="template_one__page__header__part_2__phone">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ padding: "0 5px" }}
                  />
                  {formData.heading.phone}
                </Text>
                <Text className="template_one__page__header__part_2__email">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ padding: "0 5px" }}
                  />
                  {formData.heading.email}
                </Text>
                <Text className="template_one__page__header__part_2__address">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ padding: "0 5px" }}
                  />
                  {`${formData.heading.city}, ${formData.heading.country} ${formData.heading.pin_code}`}
                </Text>
              </View>
            </View>
            <View className="template_one__page__body">
              <View className="template_one__page__body__sec_1">
                <View className="template_one__page__body__sec_1__parts">
                  <Text className="body_heading">Education</Text>
                  {formData.education &&
                    formData.education.map((edu, index) => (
                      <View key={index} className="description_text">
                        <Text>• {edu.degree}</Text>
                        <Text>{edu.school_college}</Text>
                        <Text>{`${edu.startYear} to ${edu.endYear}`}</Text>
                      </View>
                    ))}
                </View>
                <View className="template_one__page__body__sec_1__parts">
                  <Text className="body_heading">Skills</Text>
                  {formData.skills &&
                    formData.skills.map((skill, index) => (
                      <Text key={index} className="description_text">
                        {`• ${skill}`}
                      </Text>
                    ))}
                </View>
                <View className="template_one__page__body__sec_1__parts">
                  <Text className="body_heading">Languages</Text>
                  {formData.languages &&
                    formData.languages.map((language, index) => (
                      <Text key={index} className="description_text">
                        {`• ${language.language} level-${language.level}`}
                      </Text>
                    ))}
                </View>
                <View className="template_one__page__body__sec_1__parts">
                  <Text className="body_heading">Achivements</Text>
                  {formData.certifications &&
                    formData.certifications.map((certify, index) => (
                      <Text key={index} className="description_text">
                        • {certify}
                      </Text>
                    ))}
                </View>
              </View>
              <div
                style={{
                  width: "0.5px",
                  minHeight: "500px",
                  height: "auto",
                  border: "1px solid gray",
                  borderRadius: "4px",
                }}
              ></div>
              <View className="template_one__page__body__sec_2">
                <View className="template_one__page__body__sec_2__summary">
                  <Text className="body_heading">Objective</Text>
                  <Text className="description_text">
                    {formData.reume_summary}
                  </Text>
                </View>
                <View className="template_one__page__body__sec_2__experience">
                  <Text className="body_heading">Experience</Text>
                  {formData.work_experience &&
                    formData.work_experience.map((exp, index) => (
                      <View key={index} className="description_text">
                        <Text
                          style={{
                            fontWeight: 550,
                            fontSize: 13,
                            letterSpacing: 2,
                          }}
                        >
                          • {exp.company}
                        </Text>
                        <Text>{exp.role_summary}</Text>
                        <Text>
                          {exp.startYear}
                          {exp.still_working_here === false &&
                            ` to ${exp.endYear}`}
                        </Text>
                      </View>
                    ))}
                </View>
                <View className="template_one__page__body__sec_2__projects">
                  <Text className="body_heading">Projects</Text>
                  {formData.projects &&
                    formData.projects.map((project, index) => (
                      <View className="description_text">
                        <Text
                          style={{
                            fontWeight: 550,
                            fontSize: 13,
                            letterSpacing: 2,
                          }}
                        >
                          • {project.project_name}
                        </Text>
                        <Text>{project.description}</Text>
                        {project.live_demo !== "" && (
                          <Text>Live_demo_link- {project.live_demo}</Text>
                        )}
                        {project.source_code !== "" && (
                          <Text>Source_code_link- {project.source_code}</Text>
                        )}
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
