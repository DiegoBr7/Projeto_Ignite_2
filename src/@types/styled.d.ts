import styled from "styled-components";

import { defaultTheme } from "../styles/themes/default";

type Themetype  = typeof defaultTheme;

declare module 'styled-component'{
    export interface defaultTheme extends Themetype {}
}