import axios from 'axios';
import { Mdmm, Mdmms } from '../../types/models';
import { SPI_API_HOST, SPI_API_PORT } from '../../config/constants';

const baseUrlMdmms = `http://${SPI_API_HOST}:${SPI_API_PORT}/api/v1/cm_mdmms`;

export async function getMdmmsFactory(cdcstm: string): Promise<Mdmms | object> {
  try {
    const res = await axios.get<Mdmms>(`${baseUrlMdmms}/${cdcstm}`);

    return res.data;
  } catch (res) {
    const error = res.response;
    throw error;
  }
}

export async function deleteMdmmsFactory(cdcstm: string, nommrb: number) {
  try {
    await axios.delete(`${baseUrlMdmms}/${cdcstm}/${nommrb}`);
    const res = await axios.get<Mdmms>(`${baseUrlMdmms}/${cdcstm}`);

    return res.data;
  } catch (res) {
    const error = res.response;
    throw error;
  }
}

export async function editMdmmsFactory(
  cdcstm: string,
  nommrb: number,
  mdmm: Mdmm,
) {
  try {
    await axios.put(`${baseUrlMdmms}/${cdcstm}/${nommrb}`, mdmm);
    const res = await axios.get<Mdmms>(`${baseUrlMdmms}/${cdcstm}`);

    return res.data;
  } catch (res) {
    const error = res.response;
    throw error;
  }
}

export async function addMdmmsFactory(mdmm: Mdmm) {
  try {
    await axios.post(`${baseUrlMdmms}`, mdmm);
    const res = await axios.get<Mdmms>(`${baseUrlMdmms}/${mdmm.md_cdcstm}`);

    return res.data;
  } catch (res) {
    const error = res.response;
    throw error;
  }
}
