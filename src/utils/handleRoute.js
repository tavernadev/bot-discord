export default function handleRoute (Service) {
  return function (req, res, next) {
    Promise.resolve().then(Service(req, res, next)).catch(next)
  }
}
