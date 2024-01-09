export function formatName(name) {
  return name.startsWith("@") ? name : "@" + name;
}
