import { createRef } from "react";
import { Bell, Search } from "@latticafi/icons";
import Icon from "@latticafi/icons/Icon";
import { iconNames, type IconName } from "@latticafi/icons/catalog";
import DirectSearch from "@latticafi/icons/icons/Search";

const name: IconName = iconNames[0];
const ref = createRef<SVGSVGElement>();

export const consumerFixture = (
  <>
    <Bell size={20} color="tomato" />
    <Search ref={ref} aria-hidden={false} aria-label="Search" role="img" />
    <DirectSearch />
    <Icon name={name} fallback={null} />
  </>
);
