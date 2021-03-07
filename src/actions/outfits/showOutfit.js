var showOutfit = (outfits) => {
  if (outfits) {
    return {
      type: 'SHOW_OUTFIT',
      outfits: outfits
    }
  }
}

export default showOutfit;