import route1 from './route1';
import route2 from './route2';

export function bootstrap(app, config) {
    route1(app, config);
    route2(app, config);
};