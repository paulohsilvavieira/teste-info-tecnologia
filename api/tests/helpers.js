
import supertest from 'supertest'
import * as chai from 'chai'
import app from '../src/index.js'

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;
