import { View, Text, Document, Page, Image, StyleSheet } from '@react-pdf/renderer';

import image from '@app/home-page/images/ua-flag.png';

import { ResumeData } from '../types';
import { CodeWarsUser } from '../types/codeWars';
import call from '../images/call.png';
import email from '../images/email.png';
import internet from '../images/internet.png';

const styles = StyleSheet.create({
  horizontal: {
    position: 'absolute',
    left: 0,
    top: '50px',
    height: '200px',
    width: '100vw',
    backgroundColor: '#242124',
    zIndex: -2,
    display: 'flex',
    padding: '10px 10px 10px 260px',
  },
  vertical: {
    position: 'absolute',
    top: 0,
    left: '50px',
    height: '100vh',
    width: '200px',
    backgroundColor: '#242124',
    zIndex: -1,

    padding: '260px 10px 10px 10px',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    gap: '8px',
  },
  itemTitle: { marginTop: '8px' },
  headSubtitle: { fontSize: '24px' },
  document: { margin: 0, padding: 0 },
  svg: { width: '12px', height: '12px' },
  item: { marginTop: '4px', fontSize: '12px' },
  contactTitle: { color: 'white', fontSize: '24px' },
  contactSubtitle: { color: 'white', fontSize: '12px' },
  head: { marginTop: '20px', fontWeight: 700, color: 'white' },
  headTitle: { width: '50%', fontSize: '56px', textTransform: 'uppercase' },
  container: { position: 'relative', height: '100%', backgroundColor: '#F0F0F0' },
  contactFooter: { color: 'white', fontSize: '10px', margin: 'auto auto 0 auto' },
  content: { padding: '260px 10px 10px 260px', display: 'flex', flexDirection: 'column' },
  flex: { display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'nowrap', gap: '4px' },
  image: { position: 'absolute', top: '60px', left: '60px', height: '180px', width: '180px', borderRadius: '50%' },
});

export interface CvPdfProps {
  readonly data?: ResumeData;
  readonly codeWarsData?: Partial<CodeWarsUser>;
}

export const CvPdf = ({ data, codeWarsData }: CvPdfProps) => {
  return (
    <Document style={styles.document}>
      <Page size="A4">
        <View style={styles.container}>
          <View style={styles.horizontal}>
            <View style={styles.head}>
              <Text style={styles.headTitle}>{data?.contact?.name}</Text>
              <Text style={styles.headSubtitle}>{data?.position}</Text>
            </View>
          </View>
          <View style={styles.vertical}>
            <Text style={styles.contactTitle}>Contact</Text>
            <View style={styles.flex}>
              <Image src={call.src} style={styles.svg}></Image>
              <Text style={styles.contactSubtitle}>{data?.contact?.phone}</Text>
            </View>
            <View style={styles.flex}>
              <Image src={email.src} style={styles.svg}></Image>
              <Text style={styles.contactSubtitle}>{data?.contact?.email}</Text>
            </View>
            <View style={styles.flex}>
              <Image src={internet.src} style={styles.svg}></Image>
              <Text style={styles.contactSubtitle}>{data?.contact?.github}</Text>
            </View>
            <View style={styles.flex}>
              <Image src={internet.src} style={styles.svg}></Image>
              <Text style={styles.contactSubtitle}>code wars ({codeWarsData?.ranks?.overall.name})</Text>
            </View>
            <Text style={styles.contactFooter}>~ Created with react-pdf ~</Text>
          </View>
          <Image src={image.src} style={styles.image}></Image>
          <View style={styles.content}>
            <Text style={styles.itemTitle}>Skills</Text>
            {data?.skills.map(skill => (
              <View key={skill} id={skill} style={styles.item}>
                <Text>{skill}</Text>
              </View>
            ))}
            <Text style={styles.itemTitle}>Books</Text>
            {data?.books.map(book => (
              <View key={book} id={book} style={styles.item}>
                <Text>{book}</Text>
              </View>
            ))}
            <Text style={styles.itemTitle}>Relevant</Text>
            <View style={styles.item}>
              <Text>{data?.relevant.experience}</Text>
            </View>
            <View style={styles.item}>
              <Text>{data?.relevant.availability}</Text>
            </View>
            <View style={styles.item}>
              <Text>{data?.relevant.coworking}</Text>
            </View>
            <View style={styles.item}>
              <Text>{data?.relevant.relocate}</Text>
            </View>
            <View style={styles.item}>
              <Text>{data?.relevant.laptop}</Text>
            </View>
            <Text style={styles.itemTitle}>Achievements</Text>
            {data?.achievements.map(achievement => (
              <View key={achievement} id={achievement} style={styles.item}>
                <Text>{achievement}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
