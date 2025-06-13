export default function handler(req, res) {
  const { op, a, b } = req.query;
  const x = parseFloat(a), y = parseFloat(b);
  let result;

  switch (op) {
    case 'add': result = x + y; break;
    case 'sub': result = x - y; break;
    case 'mul': result = x * y; break;
    case 'div': result = y !== 0 ? x / y : '∞'; break;
    default: result = 'Invalid op';
  }

  res.status(200).json({ result });
}
