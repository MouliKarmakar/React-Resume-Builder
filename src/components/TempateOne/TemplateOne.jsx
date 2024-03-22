import React from "react";
import "./TemplateOne.scss";
import { Document, Page, Text, View } from "@react-pdf/renderer";
export default function TemplatesOneComponent() {
  return (
    <div className="template_one">
      <Document>
        <Page size="A4" className="template_one__page">
          <View className="template_one__page__heading">
            <Text>jone doe</Text>
          </View>
        </Page>
      </Document>
    </div>
  );
}
