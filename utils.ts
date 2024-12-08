import { Page } from "puppeteer";
import dotenv from 'dotenv';
dotenv.config();

export const ADMIN_PASS = process.env.ADMIN_PASS || '';
export const PRIVILEGED = process.env.PRIVILEGED?.split('-') || '';
export const sendLog = (message:string | unknown) => {
  console.log('=========================')
  console.log(message)
}
export const puppet = async (page: Page, callback: () => Promise<void>, message:string):Promise<void> => {
  console.log(message)
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  await callback();
}
export interface Data {
  mac: string;
  name: string;
}