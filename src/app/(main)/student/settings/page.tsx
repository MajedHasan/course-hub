import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import Account from "./_component/account";
import LoginSecurity from "./_component/login-security";
import Notifications from "./_component/notifications";

type Props = {};

const Settings = (props: Props) => {
  return (
    <section>
      <Card>
        <Tabs defaultValue="account">
          <CardHeader>
            <TabsList className="grid grid-cols-3 ">
              <TabsTrigger value="account">Account Settings</TabsTrigger>
              <TabsTrigger value="login-security">Login Security</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
          </CardHeader>
          <CardContent>
            <TabsContent value="account">
              <Account />
            </TabsContent>
            <TabsContent value="login-security">
              <LoginSecurity />
            </TabsContent>
            <TabsContent value="notifications">
              <Notifications />
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </section>
  );
};

export default Settings;
