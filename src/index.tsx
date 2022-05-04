import './less/index.less';
import ReactDOM from 'react-dom';
import { Hello } from 'Components/Hello';
import module1 from './module2';

const root = document.querySelector('#root');
root.innerHTML = 'hello, webpacks!';

console.log(3);
ReactDOM.render(<Hello name="davont" />, document.querySelector('#root'));
