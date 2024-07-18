import React from 'react';
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const data = {
  'Geliştirilmiş Deneyim': [
    ['Groka\'a Erken Erişim', '✓', '✓', '✓'],
    ['Sana Özel\'de ve Takip Edilenler\'de Reklamlar', 'Tam', 'Yarı', 'Yok'],
    ['Yanıt derecesi', 'En düşük', 'Daha yüksek', 'En yüksek'],
    ['Gönderiyi düzenle', '✓', '✓', '✓'],
    ['Daha uzun gönderiler', '✓', '✓', '✓'],
    ['Gönderiyi geri al', '✓', '✓', '✓'],
    ['En Popüler Makaleler', '', '✓', '✓'],
    ['Arka planda video oynatma', '', '✓', '✓'],
    ['Videoları indir', '', '✓', '✓'],
  ],
  'İçerik Üreticisi Merkezi': [
    ['Makale Yaz', '', '✓', '✓'],
    ['Gönderiyi yayınlayarak para kazan', '', '✓', '✓'],
    ['İçerik Üreticisi Abonelikleri', '', '✓', '✓'],
    ['X Pro', '', '✓', '✓'],
    ['Media Studio', '', '✓', '✓'],
    ['İstatistikler', '', '✓', '✓'],
    ['Daha uzun videolar yayınla', '', '✓', '✓'],
  ],
  'Onaylama ve Güvenlik': [
    ['Onay işareti', '', '✓', '✓'],
    ['İsteğe Bağlı Kimlik Doğrulama', '', '✓', '✓'],
    ['Şifreli direkt mesajlar', '✓', '✓', '✓'],
  ],
  'Özelleştirme': [
    ['Öne Çıkanlar sekmesi', '✓', '✓', '✓'],
    ['Yer işareti klasörleri', '✓', '✓', '✓'],
    ['Uygulama simgeleri', '', '✓', '✓'],
    ['Gizlilik özellikleri', '', '✓', '✓'],
  ],
};

const PlanTable = () => {
  return (
    <Container sx={{mt:"72px",minHeight:"75%",maxWidth:"977px !important",mb:"200px"}}>
      <Typography fontSize="26px" fontWeight={700} lineHeight="32px">
        Katmanları ve özellikleri karşılaştır
      </Typography>
      {Object.keys(data).map((category) => (
        <Box key={category} mt="32px">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontSize:"17px",fontWeight:"700",color:"rgb(231, 233, 234)"}} >{category}</TableCell>
                  <TableCell sx={{fontSize:"17px",fontWeight:"700",color:"rgb(231, 233, 234)"}} align="center">Temel</TableCell>
                  <TableCell sx={{fontSize:"17px",fontWeight:"700",color:"rgb(231, 233, 234)"}} align="center">Premium</TableCell>
                  <TableCell sx={{fontSize:"17px",fontWeight:"700",color:"rgb(231, 233, 234)"}} align="center">Premium+</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data[category].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{fontSize:"15px",fontWeight:"400",color:"rgb(182,185,188)"}}>{row[0]}</TableCell>
                    <TableCell sx={{fontSize:"15px",fontWeight:"400",color:"rgb(182,185,188)"}} align="center">{row[1]}</TableCell>
                    <TableCell sx={{fontSize:"15px",fontWeight:"400",color:"rgb(182,185,188)"}} align="center">{row[2]}</TableCell>
                    <TableCell sx={{fontSize:"15px",fontWeight:"400",color:"rgb(182,185,188)"}} align="center">{row[3]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Container>
  );
};

export default PlanTable;
