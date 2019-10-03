export const formatDate = (date: Date) => date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
