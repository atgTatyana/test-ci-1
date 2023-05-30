export default function showHealth(obj) {
  const { health } = obj;
  if (health > 50) {
    return 'healthy';
  }
  if (health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
