import { Button, Card, Container, Heading, Stack, Text } from "@sanity/ui";

export function DocumentationPage() {
  return (
    <Container width={2} style={{ padding: "2rem" }}>
      <Stack space={5}>
        <Card padding={4} radius={2} shadow={1} tone="primary">
          <Stack space={4}>
            <Heading as="h1" size={2}>
              📚 Guide d'utilisation
            </Heading>
            <Text>
              Documentation complète pour utiliser Sanity Studio et gérer le
              contenu du site Curiosity Builders.
            </Text>
          </Stack>
        </Card>

        <Card padding={4} radius={2} shadow={1}>
          <Stack space={4}>
            <Heading as="h2" size={1}>
              📖 Accès au guide complet
            </Heading>
            <Text>
              Le guide d'utilisation complet est disponible en téléchargement.
            </Text>
            <Text muted>
              Ce guide contient toutes les informations nécessaires pour :
            </Text>
            <Text muted size={1}>
              • Gérer le contenu multilingue (FR/EN)
              <br />
              • Modifier la page d'accueil (10 sections)
              <br />
              • Gérer les images et médias
              <br />
              • Modifier le menu et le footer
              <br />
              • Résoudre les problèmes courants
              <br />• Et bien plus encore...
            </Text>
            <Stack space={2}>
              <Button
                as="a"
                href="/GUIDE-SANITY-CURIOSITY-BUILDERS.pdf"
                target="_blank"
                text="📄 Ouvrir le guide"
                tone="primary"
                mode="default"
              />
              <Button
                as="a"
                href="/GUIDE-SANITY-CURIOSITY-BUILDERS.pdf"
                download="GUIDE-SANITY-CURIOSITY-BUILDERS.pdf"
                text="⬇️ Télécharger le guide (PDF)"
                tone="positive"
                mode="ghost"
              />
              <Text muted size={2} style={{ margin: "1rem" }}>
                Un guide vidéo est également disponible pour vous accompagner
                dans l'utilisation de Sanity Studio !
              </Text>
              <Button
                as="a"
                href="https://screenrec.com/share/HzxshFTlU6"
                target="_blank"
                text="🎥 Voir le guide vidéo"
                tone="primary"
                mode="ghost"
              />
            </Stack>
          </Stack>
        </Card>

        <Card padding={4} radius={2} shadow={1}>
          <Stack space={4}>
            <Heading as="h2" size={1}>
              🚀 Accès rapide
            </Heading>
            <Text weight="semibold">Gestion multilingue</Text>
            <Text muted size={1}>
              Le site est disponible en 🇫🇷 Français et 🇬🇧 English. Pensez à
              modifier les DEUX versions !
            </Text>

            <Text weight="semibold">Organisation du contenu</Text>
            <Text muted size={1}>
              • <strong>Layout & Navigation</strong> : Logo, Menu, Footer
              <br />• <strong>Pages principales</strong> : Accueil, Signals,
              Services, Méthode, Contact
              <br />• <strong>Pages légales</strong> : Mentions légales,
              Confidentialité
              <br />• <strong>SEO</strong> : Paramètres de référencement
            </Text>

            <Text weight="semibold">Workflow de modification</Text>
            <Text muted size={1}>
              1. Trouver le contenu dans le menu de gauche
              <br />
              2. Choisir la langue (🇫🇷 ou 🇬🇧)
              <br />
              3. Modifier les champs
              <br />
              4. Cliquer sur <strong>"Publish"</strong>
            </Text>
          </Stack>
        </Card>

        <Card padding={4} radius={2} tone="caution">
          <Stack space={3}>
            <Heading as="h3" size={1}>
              ⚠️ Important
            </Heading>
            <Text>
              N'oubliez pas de cliquer sur <strong>"Publish"</strong> (pas
              seulement "Save") pour que vos modifications apparaissent sur le
              site !
            </Text>
          </Stack>
        </Card>

        <Card padding={4} radius={2} shadow={1}>
          <Stack space={3}>
            <Heading as="h3" size={1}>
              📞 Besoin d'aide ?
            </Heading>
            <Text>
              Si vous avez des questions, consultez le guide complet ou
              contactez felix.orain@gmail.com.
            </Text>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
