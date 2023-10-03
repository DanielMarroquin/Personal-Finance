import { Flex } from "../styles/flex";
import { Breadcrumbs, Crumb, CrumbLink } from "../breadcrumb/breadcrumb.styled";
import Link from "next/link";
import { Button, Input, Text } from "@nextui-org/react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import React from "react";
import { TableWrapper } from "../table/table";
import { AddUser } from "../accounts/add-user";
import { ExportIcon } from "../icons/accounts/export-icon";
import { HouseIcon } from "../icons/breadcrumb/house-icon";

export const Expenses = () => {
  return (
    <Flex
      css={{
        mt: "$5",
        px: "$6",
        "@sm": {
          mt: "$10",
          px: "$16",
        },
      }}
      justify={"center"}
      direction={"column"}
    >
      <Breadcrumbs>
        <Crumb>
          <HouseIcon />
          <Link href={"/"}>
            <CrumbLink href="#">Inicio</CrumbLink>
          </Link>
          <Text>/</Text>
        </Crumb>

        <Crumb>
          <AttachMoneyIcon />
          <CrumbLink href="#">Pagos</CrumbLink>
          <Text>/</Text>
        </Crumb>
        <Crumb>
          <CrumbLink href="#">Listado</CrumbLink>
        </Crumb>
      </Breadcrumbs>
      <Text h3>Tus Gastos</Text>
      <Flex
        css={{ gap: "$8" }}
        align={"center"}
        justify={"between"}
        wrap={"wrap"}
      >
        <Flex
            css={{
              gap: "$6",
              flexWrap: "wrap",
              "@sm": { flexWrap: "nowrap" },
            }}
            align={"center"}
        >
        <Input
          css={{ width: "100%", maxW: "410px" }}
          placeholder="Busca pagos"
        />
        </Flex>
        <Flex direction={"row"} css={{ gap: "$6" }} wrap={"wrap"}>
          <AddUser />
          <Button auto iconRight={<ExportIcon />}>
            Export to CSV
          </Button>
        </Flex>
      </Flex>
      <TableWrapper />
    </Flex>
  );
};
