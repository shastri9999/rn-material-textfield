import * as React from "react";
import {
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
  View,
} from "react-native";

export interface ContentInset {
  top?: number;
  label?: number;
  input?: number;
}

export interface TextFieldProps extends TextInputProps {
  animationDuration?: number;

  fontSize?: number;
  labelFontSize?: number;
  contentInset?: ContentInset;

  style?: StyleProp<TextStyle>;
  labelTextStyle?: StyleProp<TextStyle>;
  titleTextStyle?: StyleProp<TextStyle>;
  affixTextStyle?: StyleProp<TextStyle>;

  tintColor?: string;
  textColor?: string;
  baseColor?: string;

  label?: string;
  title?: string;

  characterRestriction?: number;

  error?: string;
  errorColor?: string;

  lineWidth?: number;
  activeLineWidth?: number;

  disabled?: boolean;

  disabledLineWidth?: number;

  clearTextOnFocus?: boolean;

  prefix?: string;
  suffix?: string;

  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;

  onPress?(event: Event): void;
  onChangeText?(text: string): void;

  renderLeftAccessory?(): JSX.Element;
  renderRightAccessory?(): JSX.Element;

  lineType?: "solid" | "dotted" | "dashed" | "none";
  disabledLineType?: "solid" | "dotted" | "dashed" | "none";

  editable?: boolean;
  multiline?: boolean;

  formatText?(text: string): string;
}

/**
 * Material Style Text Field
 * @see https://github.com/shastri9999/rn-material-textfield/blob/master/src/components/field/index.js
 */
export class TextField extends React.Component<TextFieldProps, any> {
  /*
   * Acquire focus
   */
  focus(): void;
  /*
   * Release focus
   */
  blur(): void;
  /*
   * Clear text field
   */
  clear(): void;
  /*
   * Get current value
   */
  value(): string;
  /*
   * Get current focus state
   */
  isFocused(): boolean;
  /*
   * Get current restriction state
   */
  isRestricted(): boolean;
  /*
   * Set current value
   */
  setValue(value?: string): void;
}

export class OutlinedTextField extends TextField {}
export class FilledTextField extends TextField {}
