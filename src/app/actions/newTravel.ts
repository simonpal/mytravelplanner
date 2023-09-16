export async function saveTravel(formData: FormData) {
  const responseBody = {} as any;
  const acc = formData.get('accomodations');
  console.log(acc);
  formData.forEach((value, property: string) => {
    if (typeof value !== 'undefined' && property !== '') {
      if (property.includes('[')) {
        const r = /\d+/;
        const idx = property?.match(r)?.[0]
          ? Number(property?.match(r)?.[0])
          : 0;
        const propSplit = property.split('[');
        const prop = propSplit[0];
        console.log(prop, idx);
        const subProp = propSplit[propSplit.length - 1].replace(']', '');
        console.log(subProp);
        const propArr = [...(responseBody[prop] ?? [])];
        propArr[idx] = { ...(propArr[idx] ?? {}), [subProp]: value };
        responseBody[prop] = propArr;
      } else {
        responseBody[property] = value as never;
      }
    }
  });

  console.log(responseBody);
}
