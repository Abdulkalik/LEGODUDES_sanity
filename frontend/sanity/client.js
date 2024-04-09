import {createClient} from '@sanity/client'

export const client = createClient({
  //Hvis du har hentet dette prosjektet fra GitHub, må du endre
  //projectId til din egen prosjektid fra sanity.io/manage
  projectId: "nl1sxoxx",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07"
})