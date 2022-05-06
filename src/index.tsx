import './less/index.less';
import ReactDOM from 'react-dom';
import { Hello } from 'Components/Hello';

if (module && module.hot) {
  module.hot.accept();
}

console.log(3);
ReactDOM.render(<Hello name="davsosantssaaa" />, document.querySelector('#root'));
