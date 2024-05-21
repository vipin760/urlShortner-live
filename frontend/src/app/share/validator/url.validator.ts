function isValidUrl(url: string): boolean {
    const pattern = new RegExp('^(https?://)?'+ // Protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // Domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR IP (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // Port and Path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // Query string
      '(\\#[-a-z\\d_]*)?$','i'); // Fragment locator
    return !!pattern.test(url);
  }