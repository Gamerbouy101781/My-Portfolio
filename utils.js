// utils.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function truncateText(text, limit = 100) {
  if (text.length > limit) {
    return text.substring(0, limit) + '...';
  }
  return text;
}

