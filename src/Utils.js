/* eslint-disable import/prefer-default-export */
export const getDataByIds = (idsCollection, collection) => {
   const result = []
   idsCollection.forEach(({ _id }) => {
      const finded = collection.find((x) => x._id === _id)
      if (finded) result.push(finded)
   })
   return result
}

export const removeHtmlTags = (text) => {
   return text.replace(/(<([^>]+)>)/gi, '').trim()
}
