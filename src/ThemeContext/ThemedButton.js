export class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}