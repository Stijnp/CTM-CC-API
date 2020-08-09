import { 
    instructions,
    numberValidation
} from '../controllers/validationControllers';

const routes = (app) => {
    app.route('/numberValidation/')
    .get(instructions);

    app.route('/numberValidation/:number')
    .get(numberValidation);
}

export default routes;