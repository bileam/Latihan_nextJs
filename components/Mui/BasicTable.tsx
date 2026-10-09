import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
{
    id: 0,
    tanggal: "24/april/2025",
    Deskripsi: "Gaji Bulanan",
    Kategori: "Pemasukan",
    jumlah: "5.000.000",
    status: true,
  },
  {
    id: 1,
    tanggal: "23/april/2025",
    Deskripsi: "Belanja Bahan Makanan",
    Kategori: "Kebutuhan",
    jumlah: "250.000",
    status: true,
  },
  {
    id: 2,
    tanggal: "22/april/2025",
    Deskripsi: "Bayar Internet",
    Kategori: "Tagihan",
    jumlah: "320.000",
    status: true,
  },
  {
    id: 3,
    tanggal: "21/april/2025",
    Deskripsi: "Transfer Masuk",
    Kategori: "Pemasukan",
    jumlah: "750.000",
    status: false,
  },
  {
    id: 4,
    tanggal: "20/april/2025",
    Deskripsi: "Beli Pulsa",
    Kategori: "Hiburan",
    jumlah: "100.000",
    status: true,
  },
  {
    id: 5,
    tanggal: "19/april/2025",
    Deskripsi: "Bayar Listrik",
    Kategori: "Tagihan",
    jumlah: "450.000",
    status: true,
  },
  {
    id: 6,
    tanggal: "18/april/2025",
    Deskripsi: "Bensin Kendaraan",
    Kategori: "Transportasi",
    jumlah: "150.000",
    status: false,
  },
  {
    id: 7,
    tanggal: "17/april/2025",
    Deskripsi: "Freelance Website",
    Kategori: "Pemasukan",
    jumlah: "1.500.000",
    status: true,
  },
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className=''>
          <TableRow className='bg-gray-200 '>
            <TableCell>Tanggal</TableCell>
            <TableCell align="left">Deskripsi</TableCell>
            <TableCell align="left">Kategori</TableCell>
            <TableCell align="left">jumlah</TableCell>
            <TableCell align="left">status</TableCell>
            <TableCell align="left">aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.tanggal}
              </TableCell>
              <TableCell align="left">{row.Deskripsi}</TableCell>
              <TableCell align="left">{row.Kategori}</TableCell>
              <TableCell align="left">{row.jumlah}</TableCell>
              <TableCell align="left" ><span className={`${row.status?"bg-green-200 text-green-500":"text-red-500 bg-red-200"}  px-2 py-1 rounded-full`}>{row.status?"berhasil":"gagal" }</span> </TableCell>
              <TableCell align="left">. . .</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}