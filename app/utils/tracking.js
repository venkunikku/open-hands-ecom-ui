export const trackClick = async (event) => {
  try {
    const element = event.target;
    const trackingData = {
      elementId: element.id,
      elementTag: element.tagName.toLowerCase(),
      elementText: element.textContent?.trim(),
      elementClass: element.className,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      x: event.clientX,
      y: event.clientY
    };

    await fetch('http://localhost:9092', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackingData),
    });
  } catch (error) {
    console.error('Error tracking click:', error);
  }
};