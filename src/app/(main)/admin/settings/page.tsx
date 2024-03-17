import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

type Props = {};

const Settings = (props: Props) => {
  return (
    <section>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full grid grid-cols-5">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="student">Student</TabsTrigger>
          <TabsTrigger value="teacher">Teacher</TabsTrigger>
        </TabsList>
        <Separator />
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="student">
          <Card>
            <CardHeader>
              <CardTitle>Student</CardTitle>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="teacher">
          <Card>
            <CardHeader>
              <CardTitle>Teacher</CardTitle>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Settings;
