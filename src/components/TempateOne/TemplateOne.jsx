import React from "react";
import "./TemplateOne.scss";
import { Initialdata } from "../../Constant/InitialData";
import { Document, Page, Text, View } from "@react-pdf/renderer";

export default function TemplatesOneComponent() {
  return (
    <div className="template_one">
      <Document>
        <Page size="A4" className="template_one__page">
          <View className="template_one__page__header">
            <View className="template_one__page__header__part_1">
              <Text className="template_one__page__header__part_1__name">
                {Initialdata.heading.full_name}
              </Text>
              <Text className="template_one__page__header__part_1__role">
                {Initialdata.heading.job_position}
              </Text>
            </View>
            <View className="template_one__page__header__part_2">
              <Text className="template_one__page__header__part_2__phone">
                {Initialdata.heading.phone}
              </Text>
              <Text className="template_one__page__header__part_2__email">
                {Initialdata.heading.email}
              </Text>
              <Text className="template_one__page__header__part_2__address">
                {`${Initialdata.heading.city}, ${Initialdata.heading.country} ${Initialdata.heading.pin_code}`}
              </Text>
            </View>
          </View>
          <View className="template_one__page__body">
            <View className="template_one__page__body__sec_1">
              <View className="template_one__page__body__sec_1__parts">
                <Text className="heading_text">Education</Text>
                {Initialdata.education.map((edu, index) => (
                  <View key={index} className="content_text">
                    <Text>{edu.degree}</Text>
                    <Text>{edu.school_college}</Text>
                    <Text>{`${edu.startYear} to ${edu.endYear}`}</Text>
                  </View>
                ))}
              </View>
              <View className="template_one__page__body__sec_1__parts">
                <Text className="heading_text">Skills</Text>
                {Initialdata.skills.map((skill, index) => (
                  <Text key={index} className="content_text">
                    {`• ${skill}`}
                  </Text>
                ))}
              </View>
              <View className="template_one__page__body__sec_1__parts">
                <Text className="heading_text">Languages</Text>
                {Initialdata.languages.map((language, index) => (
                  <Text key={index} className="content_text">
                    {`• ${language.language} level-${language.level}`}
                  </Text>
                ))}
              </View>
            </View>
            <View className="template_one__page__body__sec_2">
              <View className="template_one__page__body__sec_2__summary"></View>
              <View className="template_one__page__body__sec_2__experience"></View>
              <View className="template_one__page__body__sec_2__projects"></View>
            </View>
          </View>
        </Page>
      </Document>
    </div>
  );
}
