export async function descargarGuia(guia: string): Promise<void> {
  const res = await fetch(`/api/pdf?guia=${encodeURIComponent(guia)}`);

  if (!res.ok) {
    throw new Error("No se pudo descargar la guía");
  }

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `${guia}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
