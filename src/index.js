import './styles.css';
import '@fortawesome/fontawesome-free/css/all.css';


import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/kD00Q0lD47kFlGUA/scene.splinecode');
