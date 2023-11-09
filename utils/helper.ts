export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  window.location.hash = elementId;
}

export function debounce(func: any, wait: number): (...args: any) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: any): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait); // Changed to call func directly
  };
}
