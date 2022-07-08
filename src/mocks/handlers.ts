import { rest } from 'msw';

const handlers = [
  rest.get('/teams', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          { id: 1, name: '동영' },
          { id: 2, name: '기동' },
          { id: 3, name: '달리' },
          { id: 4, name: '동근' },
          { id: 5, name: '나영' },
          { id: 6, name: '요한' },
          { id: 7, name: '찬희' },
          { id: 8, name: '화랑' },
          { id: 9, name: '지은' },
          { id: 10, name: '재호' },
          { id: 11, name: '루카스' },
          { id: 12, name: '오프' },
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
