import { rest } from 'msw';

const handlers = [
  rest.get('/movies', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: 1,
            title: 'Spider Man',
            rate: 4.5,
          },
          {
            id: 2,
            title: 'Kings Man',
            rate: 4.5,
          },
        ],
      })
    );
  }),
  rest.get('/movies/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        title: 'Spider Man',
        rate: 4.5,
      })
    );
  }),
];

export default handlers;
