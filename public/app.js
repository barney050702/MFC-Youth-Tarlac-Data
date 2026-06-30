// ==========================================
// 1. SAMPLE SEED DATA (RELATIONAL WITH 152 MEMBERS)
// ==========================================

const SAMPLE_MEMBERS = [
  // Original Seed Leaders (IDs 1-8)
  { id: 1, name: 'Juan Dela Cruz', chapter_area: 'EAST', role: 'Chapter Servant', contact: '+63 912 345 6789', email: 'juan.east@example.com', status: 'Active', age: 32, birthday: '1994-04-12', address: 'Tarlac City', parents_contact: '' },
  { id: 2, name: 'Maria Santos', chapter_area: 'WEST', role: 'Household Head', contact: '+63 922 456 7890', email: 'maria.west@example.com', status: 'Active', age: 28, birthday: '1998-09-21', address: 'Sta. Ignacia, Tarlac', parents_contact: '' },
  { id: 3, name: 'Pedro Penduko', chapter_area: 'AREA', role: 'Unit Head', contact: '+63 933 567 8901', email: 'pedro.area@example.com', status: 'Active', age: 35, birthday: '1991-07-07', address: 'Moncada, Tarlac', parents_contact: '' },
  { id: 4, name: 'Ana Gomez', chapter_area: 'NORTH', role: 'Area Coordinator', contact: '+63 944 678 9012', email: 'ana.north@example.com', status: 'Active', age: 30, birthday: '1996-11-15', address: 'Moncada, Tarlac', parents_contact: '' },
  { id: 5, name: 'Jose Rizal', chapter_area: 'SOUTH', role: 'Core Member', contact: '+63 955 789 0123', email: 'jose.south@example.com', status: 'Inactive', age: 40, birthday: '1986-06-19', address: 'Concepcion, Tarlac', parents_contact: '' },
  { id: 6, name: 'Clara Del Pilar', chapter_area: 'UPPER CORE', role: 'Chapter Servant', contact: '+63 916 234 5678', email: 'clara.uc@example.com', status: 'Active', age: 29, birthday: '1997-03-05', address: 'Paniqui, Tarlac', parents_contact: '' },
  { id: 7, name: 'Andres Bonifacio', chapter_area: 'LIT', role: 'LIT Head', contact: '+63 927 345 6789', email: 'andres.lit@example.com', status: 'Active', age: 26, birthday: '2000-11-30', address: 'Tarlac City', parents_contact: '' },
  { id: 8, name: 'Gabriela Silang', chapter_area: 'TRAINING', role: 'Training Head', contact: '+63 938 456 7890', email: 'gabriela.training@example.com', status: 'Active', age: 27, birthday: '1999-05-10', address: 'Paniqui, Tarlac', parents_contact: '' },

  // 64 New Members imported from Spreadsheet (IDs 9-72)
  { id: 9, name: 'Mark Allen S. Nosaves', chapter_area: 'EAST', role: 'Member', contact: '9923937559', email: '', status: 'Active', age: 13, birthday: '3/23/2013', address: 'Matatalaib, Tarlac', parents_contact: '9919235478' },
  { id: 10, name: 'Precious Diane Z. Samson', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 13, birthday: '3/20/2013', address: 'San Manuel, Tarlac', parents_contact: '9919235478' },
  { id: 11, name: 'Clark Kent Z. Samson', chapter_area: 'EAST', role: 'Member', contact: '9933643376', email: '', status: 'Active', age: 10, birthday: '8/24/2016', address: 'San Manuel, Tarlac', parents_contact: '9919235478' },
  { id: 12, name: 'Cedrick Jewel G. Puyawan', chapter_area: 'EAST', role: 'Member', contact: '9455002513', email: '', status: 'Active', age: 14, birthday: '9/12/2011', address: 'San Manuel, Tarlac', parents_contact: '99546284287' },
  { id: 13, name: 'Jhozhua L. Corpuz', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 13, birthday: '12/29/2012', address: 'San Manuel, Tarlac', parents_contact: '9108330947' },
  { id: 14, name: 'Enzo Luis A. Labon', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '10/28/2011', address: 'San Manuel, Tarlac', parents_contact: '' },
  { id: 15, name: 'Jhaztin Carl Corpuz', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '02/28/2010', address: 'San Manuel, Tarlac', parents_contact: '9108330973' },
  { id: 16, name: 'John Marion Sigua', chapter_area: 'EAST', role: 'Member', contact: '9122712254', email: '', status: 'Active', age: 12, birthday: '09/08/2013', address: 'Maliwalo Tarlac', parents_contact: '9456885921' },
  { id: 17, name: 'Carmelo Anthony G. Sigua', chapter_area: 'EAST', role: 'Member', contact: '9153025737', email: '', status: 'Active', age: 16, birthday: '09/28/2009', address: 'Maliwalo Tarlac', parents_contact: '9456885921' },
  { id: 18, name: 'Jovel D. Garcia', chapter_area: 'EAST', role: 'Member', contact: '9038360124', email: '', status: 'Active', age: 14, birthday: '7/19/2011', address: 'Maliwalo Tarlac', parents_contact: '9386956160' },
  { id: 19, name: 'Jeanette Mary Salazar', chapter_area: 'EAST', role: 'Member', contact: '9101388805', email: '', status: 'Active', age: 18, birthday: '9/8/2007', address: 'Sitio Buni Bura', parents_contact: '9094708294' },
  { id: 20, name: 'Jeonard Francis Catap', chapter_area: 'EAST', role: 'Member', contact: '9701807117', email: '', status: 'Active', age: 18, birthday: '8/29/2007', address: 'Culipat, Tarlac City', parents_contact: '9121256554' },
  { id: 21, name: 'Miguel Antonio Tañedo', chapter_area: 'EAST', role: 'Member', contact: '9919791125', email: '', status: 'Active', age: 18, birthday: '10/18/2011', address: 'San Sebastian, Tarlac City', parents_contact: '9584887998' },
  { id: 22, name: 'Gabriel R. Magat', chapter_area: 'EAST', role: 'Member', contact: '9604136208', email: '', status: 'Active', age: 14, birthday: '01/16/2012', address: 'Sitio Calevo Tibag, Tarlac City', parents_contact: '9634409663' },
  { id: 23, name: 'Rajh Bernardo', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '11/21/2014', address: 'San Manuel, Tarlac', parents_contact: '94821456916' },
  { id: 24, name: 'Jaycee Antonio', chapter_area: 'EAST', role: 'Member', contact: '9202031881', email: '', status: 'Active', age: 14, birthday: '11/23/2011', address: 'Batang Batang Tarlac City', parents_contact: '9389293791' },
  { id: 25, name: 'Aljune Lagmay', chapter_area: 'EAST', role: 'Member', contact: '9564393473', email: '', status: 'Active', age: 16, birthday: '11/07/2012', address: 'Batang Batang Tarlac City', parents_contact: '' },
  { id: 26, name: 'Jilian Baquerto', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '05/05/2010', address: 'Lalapac Victoria Tarlac', parents_contact: '965817117' },
  { id: 27, name: 'Rocel Yusi', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '7/31/2011', address: 'Lalapac Victoria Tarlac', parents_contact: '965817117' },
  { id: 28, name: 'Justine A. Officiar', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '12/5/2010', address: 'Batang Batang Tarlac City', parents_contact: '9092069893' },
  { id: 29, name: 'Darlina Kathe Seaismundo', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '05/05/2011', address: 'Batang Batang Tarlac City', parents_contact: '9670072185' },
  { id: 30, name: 'Karl Andrei Nunag', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '4/11/2011', address: 'Batang Batang Tarlac City', parents_contact: '951429950' },
  { id: 31, name: 'Johnny P. Eugenio', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '1/16/2012', address: 'Batang Batang Tarlac City', parents_contact: '9928788142' },
  { id: 32, name: 'Reeza Manthas L. Peralta', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '3/8/2010', address: 'Batang Batang Tarlac City', parents_contact: '97723325805' },
  { id: 33, name: 'Rishelyne S. Balansag', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '4/23/2010', address: 'Batang Batang Tarlac City', parents_contact: '9919857944' },
  { id: 34, name: 'Ceana Ghail R. Benson', chapter_area: 'EAST', role: 'Member', contact: '9658796230', email: '', status: 'Active', age: 17, birthday: '2/14/2009', address: 'Lapaz', parents_contact: '99109586974' },
  { id: 35, name: 'Matt Christian L. Pascua', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '2/7/2010', address: 'Batang Batang Tarlac City', parents_contact: '9943765091' },
  { id: 36, name: 'John Carlo S. Daguro', chapter_area: 'EAST', role: 'Member', contact: '9942527797', email: '', status: 'Active', age: 16, birthday: '12/10/2009', address: 'Batang Batang Tarlac City', parents_contact: '' },
  { id: 37, name: 'Ella Tolentino', chapter_area: 'EAST', role: 'Member', contact: '9641514850', email: '', status: 'Active', age: 17, birthday: '5/23/2009', address: 'San Pascual, Tarlac City', parents_contact: '9101715799' },
  { id: 38, name: 'Rona Tacutaco', chapter_area: 'EAST', role: 'Member', contact: '9851636519', email: '', status: 'Active', age: 16, birthday: '8/9/2009', address: 'San Pascual, Tarlac City', parents_contact: '9569470391' },
  { id: 39, name: 'Aira Landingin', chapter_area: 'EAST', role: 'Member', contact: '9708718879', email: '', status: 'Active', age: 16, birthday: '7/7/2009', address: 'San Pascual, Tarlac City', parents_contact: '9758435309' },
  { id: 40, name: 'Ayesha B. Gadiana', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 9, birthday: '6/2/2016', address: 'San Isidro, Tarlac City', parents_contact: '9305555256' },
  { id: 41, name: 'Sean Ilagan', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '10/14/2011', address: 'Paniqui Tarlac', parents_contact: '9457716246' },
  { id: 42, name: 'Louis Ilagan', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 12, birthday: '12/26/2013', address: 'Paniqui Tarlac', parents_contact: '9457716246' },
  { id: 43, name: 'Andrean Jade Bravana', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 11, birthday: '8/1/2014', address: 'San Isidro, Tarlac City', parents_contact: '' },
  { id: 44, name: 'Prince John B. Gadiana', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 12, birthday: '3/26/2014', address: 'San Isidro, Tarlac City', parents_contact: '' },
  { id: 45, name: 'Kiann Sev B. Tejada', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '12/07/2010', address: 'Burgos, Paniqui Tarlac', parents_contact: '9560933949' },
  { id: 46, name: 'Lysander Uriel Ventura', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '1/22/2011', address: 'Paniqui Tarlac', parents_contact: '9395128453' },
  { id: 47, name: 'Raj Gabriel Pathak', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '3/25/2011', address: 'Pob. South Ramos', parents_contact: '9544973975' },
  { id: 48, name: 'Aljihin B. Caronongan', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '12/12/2010', address: 'Coral Paniqui Tarlac', parents_contact: '9276031736' },
  { id: 49, name: 'April Jane DelaCruz', chapter_area: 'WEST', role: 'Member', contact: '9926539259', email: '', status: 'Active', age: 15, birthday: '04/30/2011', address: 'Cabaruan, Purok 2 Sta. Ignacia, Tarlac', parents_contact: '9770490513' },
  { id: 50, name: 'Sharina Bona', chapter_area: 'WEST', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '10/30/2010', address: 'San Francisco, Sta. Ignacia Tarlac', parents_contact: '9635901351' },
  { id: 51, name: 'Raphael Carl P. Rivera', chapter_area: 'WEST', role: 'Member', contact: '9562477438', email: '', status: 'Active', age: 15, birthday: '12/02/2010', address: 'Pob. West Sta. Ignacia Tarlac', parents_contact: '9275324598' },
  { id: 52, name: 'Jerecho P. Rivera', chapter_area: 'WEST', role: 'Member', contact: '9885851155', email: '', status: 'Active', age: 17, birthday: '10/19/2008', address: 'Pob. West Sta. Ignacia Tarlac', parents_contact: '9203408895' },
  { id: 53, name: 'Jay Aldrin A. Marticio', chapter_area: 'EAST', role: 'Member', contact: '9163282336', email: '', status: 'Active', age: 17, birthday: '04/29/2009', address: 'Pob. West Sta. Ignacia Tarlac', parents_contact: '9203408895' },
  { id: 54, name: 'Cyril John Roque', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '2/14/2012', address: 'Batang Batang Tarlac City', parents_contact: '9519893272' },
  { id: 55, name: 'Chena Mae Matias', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 17, birthday: '4/14/2010', address: 'Batang Batang Tarlac City', parents_contact: '9670072185' },
  { id: 56, name: 'Kian L. Notarlz', chapter_area: 'EAST', role: 'Member', contact: '9072536395', email: '', status: 'Active', age: 15, birthday: '12/9/2010', address: 'Batang Batang Tarlac City', parents_contact: '9457784480' },
  { id: 57, name: 'Fredierick R. Antalan', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '11/09/2011', address: 'Moncada, Tarlac', parents_contact: '' },
  { id: 58, name: 'Harrieth C. Valdez', chapter_area: 'NORTH', role: 'Member', contact: '9091990427', email: '', status: 'Active', age: 16, birthday: '9/24/2009', address: 'Moncada, Tarlac', parents_contact: '9272328857' },
  { id: 59, name: 'Evangeline M. Obilio', chapter_area: 'NORTH', role: 'Member', contact: '9648210825', email: '', status: 'Active', age: 14, birthday: '03/23/2012', address: 'Moncada, Tarlac', parents_contact: '9301028385' },
  { id: 60, name: 'Jona Mariz A. De Venecia', chapter_area: 'NORTH', role: 'Member', contact: '9058660828', email: '', status: 'Active', age: 15, birthday: '6/8/2010', address: 'Moncada, Tarlac', parents_contact: '9550847346' },
  { id: 61, name: 'Joevelyn Rhixzy G. Espejo', chapter_area: 'NORTH', role: 'Member', contact: '9639097664', email: '', status: 'Active', age: 18, birthday: '3/30/2008', address: 'Moncada, Tarlac', parents_contact: '9124661843' },
  { id: 62, name: 'Jhazelle E. Balmorez', chapter_area: 'NORTH', role: 'Member', contact: '9816860482', email: '', status: 'Active', age: 15, birthday: '10/20/2010', address: 'Moncada, Tarlac', parents_contact: '935309587' },
  { id: 63, name: 'Chedz Louise C. Tabilin', chapter_area: 'NORTH', role: 'Member', contact: '9816860482', email: '', status: 'Active', age: 13, birthday: '6/7/2012', address: 'Moncada, Tarlac', parents_contact: '9338156014' },
  { id: 64, name: 'Aron Kent G. Salvador', chapter_area: 'NORTH', role: 'Member', contact: '9615832773', email: '', status: 'Active', age: 18, birthday: '03/09/2008', address: 'Salumague, Paniqui Tarlac', parents_contact: '9300467865' },
  { id: 65, name: 'Fernando A. Dar', chapter_area: 'NORTH', role: 'Member', contact: '9454878873', email: '', status: 'Active', age: 18, birthday: '4/26/2008', address: 'Moncada, Tarlac', parents_contact: '9296699956' },
  { id: 66, name: 'Ma. Yvonne C. Niegos', chapter_area: 'NORTH', role: 'Member', contact: '9289720379', email: '', status: 'Active', age: 17, birthday: '9/9/2008', address: 'Moncada, Tarlac', parents_contact: '9957240313' },
  { id: 67, name: 'Leah Andrea C. Casica', chapter_area: 'NORTH', role: 'Member', contact: '9181583353', email: '', status: 'Active', age: 17, birthday: '4/5/2009', address: 'PacPaco San Manuel Moncada, Tarlac', parents_contact: '9488473102' },
  { id: 68, name: 'Renz Cyruz P. Sapla', chapter_area: 'NORTH', role: 'Member', contact: '9685853306', email: '', status: 'Active', age: 17, birthday: '10/14/2008', address: 'Moncada, Tarlac', parents_contact: '' },
  { id: 69, name: 'Sophia Reign C. Pujol', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 12, birthday: '7/25/2013', address: 'Moncada, Tarlac', parents_contact: '' },
  { id: 70, name: 'Riley Tiffany B. Egipto', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '3/16/2010', address: 'Magaspac, Gerona Tarlac', parents_contact: '9278825052' },
  { id: 71, name: 'Antonia G. Egipto', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 12, birthday: '6/28/2013', address: 'Magaspac, Gerona Tarlac', parents_contact: '9672539992' },
  { id: 72, name: 'Liselle Ondrea B. Egipto', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '1/9/2012', address: 'Magaspac, Gerona Tarlac', parents_contact: '9278825052' },

  // 80 New Members (IDs 73-152)
  { id: 73, name: 'Agustin Fritzzy Ann Gabriel', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 74, name: 'Arnzenia Joy', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 75, name: 'Balagtas Jash F', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 76, name: 'Batiancila Crystal Francheska', chapter_area: '', role: 'Member', contact: '9510408904', email: 'skibidisigmaohio635@gmail.com', status: 'Active', age: 13, birthday: '04/03/2011', address: 'San Isidro Zone 1 Farmhouse', parents_contact: '' },
  { id: 77, name: 'Bautista Red', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 78, name: 'Bedruz Maria Cassandra', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 79, name: 'Bengco Arnie Nares', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 80, name: 'Bengco Reniel M.', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 81, name: 'Bernardo Leona Tolentino', chapter_area: '', role: 'Member', contact: '9635129447', email: 'Josabernardo0518@gmail.com', status: 'Active', age: 17, birthday: '05/18/2007', address: 'Blk. 3 San Manuel, Tarlac City', parents_contact: '' },
  { id: 82, name: 'Bernardo Rc', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 83, name: 'Bernardo Reycel', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 84, name: 'Briones Kyllie Yalung', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 12, birthday: '09/30/2011', address: 'Brgy. Salapungan', parents_contact: '' },
  { id: 85, name: 'Cabalu Mary Ann Villanueva', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 86, name: 'Calma Elle Sapphire Tria', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '09/18/2009', address: 'Salapungan, Tarlac City', parents_contact: '' },
  { id: 87, name: 'Calma Yael', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 13, birthday: '04/05/2011', address: 'Brgy. Salapungan', parents_contact: '' },
  { id: 88, name: 'Calugay Bryce', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 89, name: 'Canlas Pia', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 90, name: 'Cashero Cedrick', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 91, name: 'Chynna Angela', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 92, name: 'Condes Divine Samson', chapter_area: '', role: 'Member', contact: '9859319777', email: 'condesroylyn@gmail.com', status: 'Active', age: 17, birthday: '06/26/2007', address: 'Blk. 7, Brgy. San Jose, Tarlac City', parents_contact: '' },
  { id: 93, name: 'Corpuz Arzenia', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 94, name: 'Corpuz Raiza Mariano', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 95, name: 'Cruz Tricia', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 17, birthday: '05/17/2007', address: 'San Pascual, Tarlac City', parents_contact: '' },
  { id: 96, name: 'Cruz Tristan Jay', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 12, birthday: '05/08/2012', address: 'Brgy. San Pascual, Tarlac City', parents_contact: '' },
  { id: 97, name: 'Cunanan April', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 98, name: 'Dante', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 99, name: 'Dautil Neil Adrian Galvan', chapter_area: '', role: 'Member', contact: '9855566985', email: 'neiladriandautil@gmail.com', status: 'Active', age: 15, birthday: '08/20/2009', address: 'Sixto Hernandez Street, Block 1, San Manuel, Tarlac City', parents_contact: '' },
  { id: 100, name: 'De Leon Raymart', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 101, name: 'DeLeon Mika', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 102, name: 'Diesmo Mark', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 103, name: 'Dizon Jhenuary', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 104, name: 'Dizon Mj Quetua', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '11/15/2007', address: 'Brgy. Salapungan', parents_contact: '' },
  { id: 105, name: 'Dizon Quetua', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 106, name: 'Doel Arriana Merc', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 107, name: 'Espiritu Haven', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 108, name: 'Espiritu Jasmin Anikka', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 109, name: 'Espiritu Jasmine', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 110, name: 'Espiritu Jelina', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '03/30/2009', address: 'Brgy. BatangBatang, Tarlac City', parents_contact: '' },
  { id: 111, name: 'Evedientes Yuri Guinto', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 112, name: 'Facunla Sam', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 113, name: 'Felesario Marga', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 114, name: 'Gambito Kenlee', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 115, name: 'Jen Elle', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 116, name: 'Karmela Ina', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 117, name: 'Lacerna Chynna Angela', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 118, name: 'Lacsina Jaycee', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 119, name: 'Lhor Jhulius', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 120, name: 'Liwanag Mj', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 121, name: 'Luto Princess Reign Pangan', chapter_area: '', role: 'Member', contact: '9604104826', email: 'princessreignluto@gmail.com', status: 'Active', age: 13, birthday: '10/08/2011', address: 'San Pascual, Tarlac City', parents_contact: '' },
  { id: 122, name: 'Luto Reign', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 123, name: 'Ma Yvonne', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 124, name: 'Macapagal Ryza', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 125, name: 'Mañalac Hazel', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 18, birthday: '10/21/2005', address: 'Brgy. Balibago II, Tarlac City', parents_contact: '' },
  { id: 126, name: 'Mandap Jhelaissa', chapter_area: '', role: 'Member', contact: '9079582030', email: 'jhlsxc@gmail.com', status: 'Active', age: 14, birthday: '03/12/2009', address: 'Blk. 2 San Manuel, Tarlac City', parents_contact: '' },
  { id: 127, name: 'Mandap Mica', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 17, birthday: '07/28/2007', address: 'Brgy. San Manuel, Tarlac City', parents_contact: '' },
  { id: 128, name: 'Masangcaty Sean Usher', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '10/24/2009', address: 'Tariji, Tarlac City', parents_contact: '' },
  { id: 129, name: 'Morales Elizabeth', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '04/19/2008', address: 'Tariji, Tarlac City', parents_contact: '' },
  { id: 130, name: 'Obletas Christine Gampoy', chapter_area: '', role: 'Member', contact: '9851638293', email: 'obletaschristine@gmail.com', status: 'Active', age: 17, birthday: '10/08/2006', address: 'Tariji Zone 5, Tarlac City', parents_contact: '' },
  { id: 131, name: 'Palasigue Dante', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 132, name: 'Pamposa Angela Charlee', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 133, name: 'Razon Janelle P.', chapter_area: '', role: 'Member', contact: '9708288083', email: 'janellerazon966@gmail.com', status: 'Active', age: 19, birthday: '02/07/2005', address: 'Barangay Tariji Zone 6, Tarlac City', parents_contact: '' },
  { id: 134, name: 'Rivera Princess Fiona', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 135, name: 'Rivera Raylfarra', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 13, birthday: '09/22/2010', address: 'Brgy. Salapungan', parents_contact: '' },
  { id: 136, name: 'Salazar Tantan', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 137, name: 'Samson Jaezelle', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 138, name: 'Samson Jin Lacerna', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 139, name: 'Samson Juan Miguel L', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 13, birthday: '06/16/2011', address: 'Brgy. San Pascual, Tarlac City', parents_contact: '' },
  { id: 140, name: 'Sanluis Cara', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 17, birthday: '10/21/2006', address: 'Brgy. San Rafael, Tarlac City', parents_contact: '' },
  { id: 141, name: 'Sigua Daniel', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 142, name: 'Sosa Jzel', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 143, name: 'Suarez Humphrey Liriel', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 144, name: 'Tabilin Shaira', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 145, name: 'Tacusalme Yvonne', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 146, name: 'Tanedo Casimiro Miguel', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 12, birthday: '07/22/2012', address: 'San Isidro, Tarlac City', parents_contact: '' },
  { id: 147, name: 'Tolentino Chloe Tabios', chapter_area: '', role: 'Member', contact: '9318061977', email: 'chloetolentino7002@gmail.com', status: 'Active', age: 16, birthday: '09/13/2007', address: 'Blk 6, Brgy. San Manuel, Tarlac City', parents_contact: '' },
  { id: 148, name: 'Torres Lorrie Ramos', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 149, name: 'Valencia Alaicka', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 150, name: 'Villanueva Kayla', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' },
  { id: 151, name: 'Villegas Aleine Simon', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '10/21/2009', address: 'Brgy. San Manuel, Tarlac City', parents_contact: '' },
  { id: 152, name: 'Yalung Nathaniel John Ballon', chapter_area: '', role: 'Member', contact: '', email: '', status: 'Active', age: 0, birthday: '', address: '', parents_contact: '' }
];

const SAMPLE_ACTIVITIES = [
  { id: 1, month: 'January', week: '1st Week', date: '2026-01-04', activity: 'Upper Core Household', chapter_area: 'AREA', status: 'Accomplished', held_in: 'Face to Face', participants: 3, venue: '', coordinator_id: 1, attendee_ids: [1, 3, 6] },
  { id: 2, month: 'January', week: '2nd Week', date: '2026-01-10', activity: 'LCSC Summit', chapter_area: '', status: '', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 3, month: 'January', week: '2nd Week', date: '2026-01-10', activity: 'Chapter Household', chapter_area: 'EAST', status: '', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 4, month: 'January', week: '2nd Week', date: '2026-01-10', activity: 'Chapter Household', chapter_area: 'WEST', status: '', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 5, month: 'January', week: '2nd Week', date: '2026-01-10', activity: 'Chapter Household', chapter_area: 'NORTH', status: '', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 6, month: 'January', week: '2nd Week', date: '2026-01-10', activity: 'Chapter Household', chapter_area: 'SOUTH', status: '', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 7, month: 'January', week: '', date: '2026-01-18', activity: 'Community Conference', chapter_area: '', status: '', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 8, month: 'January', week: '3rd Week', date: '2026-01-17', activity: 'Upper Core Household / MTD', chapter_area: 'AREA', status: 'Accomplished', held_in: 'Online', participants: 2, venue: '', coordinator_id: 3, attendee_ids: [3, 6] },
  { id: 9, month: 'January', week: '4th Week', date: '2026-01-24', activity: 'Area Assembly', chapter_area: 'AREA', status: 'Accomplished', held_in: 'Face to Face', participants: 7, venue: 'Saint Raymond Nonnatus, Moncada', coordinator_id: 3, attendee_ids: [1, 2, 3, 4, 6, 7, 8] },
  { id: 10, month: 'January', week: '4th Week', date: '2026-01-25', activity: 'LIT Year Starter', chapter_area: 'LIT', status: 'Accomplished', held_in: 'Face to Face', participants: 1, venue: '', coordinator_id: 7, attendee_ids: [7] },
  { id: 11, month: 'January', week: '5th Week', date: '2026-01-31', activity: 'LCSC Forum', chapter_area: 'AREA', status: 'Accomplished', held_in: '', participants: 0, venue: 'Our Lady of Ransom', coordinator_id: null, attendee_ids: [] },
  { id: 12, month: 'January', week: '5th Week', date: '2026-01-31', activity: 'HeartChamp Training', chapter_area: '', status: '', held_in: '', participants: 0, venue: 'Patalan Farm - Paniqui', coordinator_id: null, attendee_ids: [] },
  { id: 13, month: 'February', week: '1st Week', date: '2026-02-01', activity: 'Servant Leaders Summit', chapter_area: 'UPPER CORE', status: 'Accomplished', held_in: 'Face to Face', participants: 6, venue: '', coordinator_id: 6, attendee_ids: [1, 2, 3, 4, 6, 8] },
  { id: 14, month: 'February', week: '2nd Week', date: '2026-02-07', activity: 'Couple Coordinators Training', chapter_area: 'TRAINING', status: 'Accomplished', held_in: 'Face to Face', participants: 4, venue: '', coordinator_id: 8, attendee_ids: [1, 2, 6, 8] },
  { id: 15, month: 'February', week: '2nd Week', date: '2026-02-08', activity: 'Chapter Household', chapter_area: 'SOUTH', status: 'Cancelled', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 16, month: 'February', week: '2nd Week', date: '2026-02-08', activity: 'Chapter Household', chapter_area: 'EAST', status: 'Cancelled', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 17, month: 'February', week: '2nd Week', date: '2026-02-08', activity: 'Chapter Household', chapter_area: 'WEST', status: 'Cancelled', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 18, month: 'February', week: '2nd Week', date: '2026-02-08', activity: 'Chapter Household', chapter_area: 'NORTH', status: 'Rescheduled', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 19, month: 'February', week: '', date: '2026-02-15', activity: 'World Couples Congress', chapter_area: '', status: '', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 20, month: 'February', week: '', date: '2026-02-17', activity: 'Chapter Household', chapter_area: 'NORTH', status: 'Accomplished', held_in: 'Face to Face', participants: 2, venue: '', coordinator_id: 4, attendee_ids: [4, 1] },
  { id: 21, month: 'February', week: '3rd Week', date: '2026-02-21', activity: 'LivePure Forum', chapter_area: 'AREA', status: 'Accomplished', held_in: 'Face to Face', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 22, month: 'February', week: '3rd Week', date: '2026-02-21', activity: 'Upper Core Household', chapter_area: 'AREA', status: 'Accomplished', held_in: 'Face to Face', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 23, month: 'February', week: '3rd Week', date: '2026-02-22', activity: 'Household Servants Training', chapter_area: 'TRAINING', status: 'Accomplished', held_in: 'Face to Face', participants: 2, venue: '', coordinator_id: 8, attendee_ids: [8, 7] },
  { id: 24, month: 'February', week: '4th Week', date: '2026-02-28', activity: 'Chapter Assembly', chapter_area: 'SOUTH', status: 'Cancelled', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 25, month: 'February', week: '4th Week', date: '2026-02-28', activity: 'Chapter Assembly', chapter_area: 'EAST', status: 'Accomplished', held_in: 'Online', participants: 3, venue: '', coordinator_id: 1, attendee_ids: [1, 2, 5] },
  { id: 26, month: 'February', week: '4th Week', date: '2026-02-28', activity: 'Chapter Assembly', chapter_area: 'WEST', status: 'Accomplished', held_in: 'Face to Face', participants: 2, venue: '', coordinator_id: 2, attendee_ids: [2, 3] },
  { id: 27, month: 'February', week: '4th Week', date: '2026-02-28', activity: 'Chapter Assembly', chapter_area: 'NORTH', status: 'Accomplished', held_in: 'Online', participants: 2, venue: '', coordinator_id: 4, attendee_ids: [4, 6] },
  { id: 28, month: 'March', week: '1st Week', date: '2026-03-01', activity: 'Go Beyond Mission Training', chapter_area: 'UPPER CORE', status: 'Accomplished', held_in: 'Face to Face', participants: 5, venue: '', coordinator_id: 6, attendee_ids: [1, 3, 4, 6, 8] },
  { id: 29, month: 'March', week: '1st Week', date: '2026-03-08', activity: 'Upper Core Household/MTD', chapter_area: 'AREA', status: 'Accomplished', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 30, month: 'March', week: '2nd Week', date: '2026-03-14', activity: 'Chapter Household', chapter_area: 'SOUTH', status: '', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 31, month: 'March', week: '2nd Week', date: '2026-03-14', activity: 'Chapter Household', chapter_area: 'EAST', status: '', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 32, month: 'March', week: '2nd Week', date: '2026-03-14', activity: 'Chapter Household', chapter_area: 'WEST', status: '', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 33, month: 'March', week: '2nd Week', date: '2026-03-14', activity: 'Chapter Household', chapter_area: 'NORTH', status: '', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] },
  { id: 34, month: 'March', week: '3rd Week', date: '2026-03-21', activity: 'Walk for Life, Walk for Unity', chapter_area: 'AREA', status: '', held_in: '', participants: 0, venue: '', coordinator_id: null, attendee_ids: [] }
];

// ==========================================
// 1.5 FIREBASE CLOUD SYNC INITIALIZATION
// ==========================================

const firebaseConfig = {
  apiKey: "AIzaSyC7jhQiLGx-2UH51ecsCex4QkATDxkslzw",
  authDomain: "mfc-youth-portal.firebaseapp.com",
  projectId: "mfc-youth-portal",
  storageBucket: "mfc-youth-portal.firebasestorage.app",
  messagingSenderId: "159791974431",
  appId: "1:159791974431:web:9364e826b3a4577c5c6d2a",
  measurementId: "G-GH8XX4DJNB"
};

let db = null;
try {
  if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("Firebase initialized successfully.");
  }
} catch (e) {
  console.error("Firebase initialization failed:", e);
}

function refreshActiveView() {
  const tabDashboard = document.getElementById('sidebar-tab-dashboard');
  const tabActivities = document.getElementById('sidebar-tab-activities');
  const tabMembers = document.getElementById('sidebar-tab-members');
  const tabAttendance = document.getElementById('sidebar-tab-attendance');
  const tabFunds = document.getElementById('sidebar-tab-funds');
  const tabAgenda = document.getElementById('sidebar-tab-agenda');
  const tabLeaders = document.getElementById('sidebar-tab-leaders');
  const tabOrgChart = document.getElementById('sidebar-tab-org-chart');
  const tabResources = document.getElementById('sidebar-tab-resources');

  if (tabDashboard?.classList.contains('active')) renderDashboard();
  if (tabActivities?.classList.contains('active')) renderActivities();
  if (tabMembers?.classList.contains('active')) renderMembers();
  if (tabAttendance?.classList.contains('active')) renderAttendanceSheet();
  if (tabFunds?.classList.contains('active')) { renderFunds(); renderMonthlySummary(); }
  if (tabAgenda?.classList.contains('active')) { renderUpcomingAgenda(); renderLateAgendaList(); renderAccomplishedAgendaList(); }
  if (tabLeaders?.classList.contains('active')) renderLeaders();
  if (tabOrgChart?.classList.contains('active')) renderOrgChart();
}

// ==========================================
// 2. CORE DATABASES CLASSES
// ==========================================

class ActivityDatabase {
  constructor() {
    this.storageKey = 'activities_db_records_v2';
    this.activities = this.loadFromStorage();
    if (db) this.setupFirebaseSync();
  }

  setupFirebaseSync() {
    db.collection('activities').onSnapshot(snapshot => {
      let isFirstLoad = false;
      if (snapshot.empty && this.activities.length > 0) {
        // Seed Firebase from local
        this.activities.forEach(act => {
          db.collection('activities').doc(act.id.toString()).set(act);
        });
        isFirstLoad = true;
      }

      if (!isFirstLoad) {
        const newData = [];
        snapshot.forEach(doc => {
          newData.push(doc.data());
        });
        if (newData.length > 0 || snapshot.empty) {
          this.activities = newData;
          this.saveToStorage();
          refreshActiveView();
        }
      }
    });
  }

  loadFromStorage() {
    const data = localStorage.getItem(this.storageKey);
    if (!data) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
      return [];
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Error parsing localStorage database records:', e);
      return [];
    }
  }

  saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.activities));
  }

  getAll() {
    return this.activities;
  }

  getFiltered(filters = {}) {
    return this.activities.filter(item => {
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const activityMatch = item.activity && item.activity.toLowerCase().includes(query);
        const venueMatch = item.venue && item.venue.toLowerCase().includes(query);
        if (!activityMatch && !venueMatch) return false;
      }
      if (filters.month && item.month !== filters.month) return false;
      if (filters.status && item.status !== filters.status) return false;
      if (filters.chapter && item.chapter_area !== filters.chapter) return false;

      if (filters.semester) {
        const firstSemMonths = ['January', 'February', 'March', 'April', 'May', 'June'];
        const secondSemMonths = ['July', 'August', 'September', 'October', 'November', 'December'];
        if (filters.semester === 'first-semester' && !firstSemMonths.includes(item.month)) return false;
        if (filters.semester === 'second-semester' && !secondSemMonths.includes(item.month)) return false;
      }
      return true;
    });
  }

  add(record) {
    const newId = this.activities.length > 0 ? Math.max(...this.activities.map(a => parseInt(a.id))) + 1 : 1;
    const newRecord = { id: newId, ...record };
    this.activities.push(newRecord);
    this.saveToStorage();
    if (db) db.collection('activities').doc(newId.toString()).set(newRecord);
    return newRecord;
  }

  update(id, updatedFields) {
    const index = this.activities.findIndex(a => a.id === parseInt(id));
    if (index !== -1) {
      this.activities[index] = { ...this.activities[index], ...updatedFields };
      this.saveToStorage();
      if (db) db.collection('activities').doc(id.toString()).set(this.activities[index]);
      return true;
    }
    return false;
  }

  delete(id) {
    const index = this.activities.findIndex(a => a.id === parseInt(id));
    if (index !== -1) {
      this.activities.splice(index, 1);
      this.saveToStorage();
      if (db) db.collection('activities').doc(id.toString()).delete();
      return true;
    }
    return false;
  }

  import(records, mode = 'overwrite') {
    if (mode === 'overwrite') {
      this.activities = [];
      if (db) db.collection('activities').get().then(snap => snap.forEach(doc => doc.ref.delete()));
    }
    let maxId = this.activities.length > 0 ? Math.max(...this.activities.map(a => parseInt(a.id))) : 0;
    records.forEach(record => {
      maxId++;
      const newAct = {
        id: maxId,
        month: record.month || '',
        week: record.week || '',
        date: record.date || '',
        activity: record.activity || 'Unnamed Activity',
        chapter_area: record.chapter_area || '',
        status: record.status || '',
        held_in: record.held_in || '',
        participants: parseInt(record.participants) || 0,
        venue: record.venue || '',
        coordinator_id: record.coordinator_id || null,
        attendee_ids: Array.isArray(record.attendee_ids) ? record.attendee_ids : []
      };
      this.activities.push(newAct);
      if (db) db.collection('activities').doc(maxId.toString()).set(newAct);
    });
    this.saveToStorage();
  }
}

class MembersDatabase {
  constructor() {
    this.storageKey = 'members_db_records_v2';

    // Migration: automatically overwrite with new 64 spreadsheet members seed on first load
    // Using v6 versioning to handle expanded fields and Attendance tab syncing
    const seeded64 = localStorage.getItem('seeded_zero_v1');
    if (!seeded64) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
      localStorage.setItem('seeded_zero_v1', 'true');
      this.members = [];

      // Sync activities default seed
      const actDb = new ActivityDatabase();
      localStorage.setItem(actDb.storageKey, JSON.stringify([]));
      actDb.activities = [];
    } else {
      this.members = this.loadFromStorage();
    }

    // Patch: ensure all 35 EAST chapter members from screenshot are present
    const EAST_PATCH_KEY = 'east_members_patch_v1';
    if (!localStorage.getItem(EAST_PATCH_KEY)) {
      const eastMembers = [
        { name: 'Mark Allen S. Nosaves', chapter_area: 'EAST', role: 'Member', contact: '9923037559', email: '', status: 'Active', age: 13, birthday: '3/23/2013', address: 'Matatalaib, Tarlac', parents_contact: '9919235478' },
        { name: 'Precious Diane Z. Samson', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 13, birthday: '3/20/2013', address: 'San Manuel, Tarlac', parents_contact: '9919235478' },
        { name: 'Clark Kent Z. Samson', chapter_area: 'EAST', role: 'Member', contact: '9933643376', email: '', status: 'Active', age: 8, birthday: '8/24/2016', address: 'San Manuel, Tarlac', parents_contact: '9919235478' },
        { name: 'Cedrick Jewel G. Puyawan', chapter_area: 'EAST', role: 'Member', contact: '9455002513', email: '', status: 'Active', age: 14, birthday: '9/12/2011', address: 'San Manuel, Tarlac', parents_contact: '9954628428' },
        { name: 'Jhozhua L. Corpuz', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 13, birthday: '12/29/2012', address: 'San Manuel, Tarlac', parents_contact: '9108330947' },
        { name: 'Enzo Luis A. Labon', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '10/28/2011', address: 'San Manuel, Tarlac', parents_contact: '' },
        { name: 'Jhaztin Carl Corpuz', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '02/28/2010', address: 'San Manuel, Tarlac', parents_contact: '9108330973' },
        { name: 'John Marion Sigua', chapter_area: 'EAST', role: 'Member', contact: '9122712254', email: '', status: 'Active', age: 12, birthday: '09/08/2013', address: 'Maliwalo Tarlac', parents_contact: '9456885921' },
        { name: 'Carmelo Anthony G. Sigua', chapter_area: 'EAST', role: 'Member', contact: '9153025737', email: '', status: 'Active', age: 16, birthday: '09/28/2009', address: 'Maliwalo Tarlac', parents_contact: '9456885921' },
        { name: 'Jovel D. Garcia', chapter_area: 'EAST', role: 'Member', contact: '9038360124', email: '', status: 'Active', age: 14, birthday: '7/19/2011', address: 'Maliwalo Tarlac', parents_contact: '9386056160' },
        { name: 'Jeanette Mary Salazar', chapter_area: 'EAST', role: 'Member', contact: '9101368605', email: '', status: 'Active', age: 18, birthday: '9/8/2007', address: 'Sitio Buni Bura', parents_contact: '9094708294' },
        { name: 'Jeonard Francis Catap', chapter_area: 'EAST', role: 'Member', contact: '9701807117', email: '', status: 'Active', age: 18, birthday: '8/29/2007', address: 'Culipat, Tarlac City', parents_contact: '9121256554' },
        { name: 'Miguel Antonio Tañedo', chapter_area: 'EAST', role: 'Member', contact: '9919791125', email: '', status: 'Active', age: 18, birthday: '10/18/2011', address: 'San Sebastian, Tarlac City', parents_contact: '9584867998' },
        { name: 'Gabriel R. Magat', chapter_area: 'EAST', role: 'Member', contact: '9604138208', email: '', status: 'Active', age: 14, birthday: '01/16/2012', address: 'Sitio Calevo Tibag, Tarlac City', parents_contact: '9634409663' },
        { name: 'Rajh Bernardo', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '11/21/2014', address: 'San Manuel, Tarlac', parents_contact: '9482145691' },
        { name: 'Jaycee Antonio', chapter_area: 'EAST', role: 'Member', contact: '9202031881', email: '', status: 'Active', age: 14, birthday: '11/23/2011', address: 'Batang Batang Tarlac City', parents_contact: '9389293791' },
        { name: 'Aljune Lagmay', chapter_area: 'EAST', role: 'Member', contact: '9564393473', email: '', status: 'Active', age: 16, birthday: '11/07/2012', address: 'Batang Batang Tarlac City', parents_contact: '' },
        { name: 'Jilian Baquerto', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '05/05/2010', address: 'Lalapac Victoria Tarlac', parents_contact: '965617117' },
        { name: 'Rocel Yusi', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '7/31/2011', address: 'Lalapac Victoria Tarlac', parents_contact: '965617117' },
        { name: 'Justine A. Officiar', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '12/5/2010', address: 'Batang Batang Tarlac City', parents_contact: '9092069693' },
        { name: 'Darlina Kathe Seaismundo', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '05/05/2011', address: 'Batang Batang Tarlac City', parents_contact: '9670072185' },
        { name: 'Karl Andrei Nunag', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '4/11/2011', address: 'Batang Batang Tarlac City', parents_contact: '951429950' },
        { name: 'Johnny P. Eugenio', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '1/16/2012', address: 'Batang Batang Tarlac City', parents_contact: '9928788142' },
        { name: 'Reeza Manthas L. Peralta', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '3/8/2010', address: 'Batang Batang Tarlac City', parents_contact: '9772332580' },
        { name: 'Rishelyne S. Balansag', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '4/23/2010', address: 'Batang Batang Tarlac City', parents_contact: '9919857944' },
        { name: 'Ceana Ghail R. Benson', chapter_area: 'EAST', role: 'Member', contact: '9658796230', email: '', status: 'Active', age: 17, birthday: '2/14/2009', address: 'Lapaz', parents_contact: '9910958697' },
        { name: 'John Carlo S. Daguro', chapter_area: 'EAST', role: 'Member', contact: '9942527797', email: '', status: 'Active', age: 16, birthday: '12/10/2009', address: 'Batang Batang Tarlac City', parents_contact: '' },
        { name: 'Ella Tolentino', chapter_area: 'EAST', role: 'Member', contact: '9641514850', email: '', status: 'Active', age: 17, birthday: '5/23/2009', address: 'San Pascual, Tarlac City', parents_contact: '9101715799' },
        { name: 'Rona Tacutaco', chapter_area: 'EAST', role: 'Member', contact: '9851636519', email: '', status: 'Active', age: 16, birthday: '8/9/2009', address: 'San Pascual, Tarlac City', parents_contact: '9569470391' },
        { name: 'Aira Landingin', chapter_area: 'EAST', role: 'Member', contact: '9708718879', email: '', status: 'Active', age: 16, birthday: '7/7/2009', address: 'San Pascual, Tarlac City', parents_contact: '9758435309' },
        { name: 'Ayesha B. Gadiana', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 9, birthday: '8/2/2016', address: 'San Isidro, Tarlac City', parents_contact: '9305555256' },
        { name: 'Sean Ilagan', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '10/14/2011', address: 'Paniqui Tarlac', parents_contact: '9457716246' },
        { name: 'Louis Ilagan', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 12, birthday: '12/26/2013', address: 'Paniqui Tarlac', parents_contact: '9457716246' },
        { name: 'Andrean Jade Bravana', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 11, birthday: '8/1/2014', address: 'San Isidro, Tarlac City', parents_contact: '' },
        { name: 'Prince John B. Gadiana', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 12, birthday: '3/28/2014', address: 'San Isidro, Tarlac City', parents_contact: '' },
      ];

      // Get current max ID
      let maxId = this.members.length > 0 ? Math.max(...this.members.map(m => m.id || 0)) : 0;

      // Build a set of existing names (lowercased) for duplicate detection
      const existingNames = new Set(this.members.map(m => (m.name || '').trim().toLowerCase()));

      let added = 0;
      eastMembers.forEach(m => {
        const key = m.name.trim().toLowerCase();
        if (!existingNames.has(key)) {
          maxId++;
          this.members.push({ id: maxId, ...m });
          existingNames.add(key);
          added++;
        }
      });

      if (added > 0) {
        this.saveToStorage();
      }
      localStorage.setItem(EAST_PATCH_KEY, 'true');
    }

    // Patch: ensure members from the screenshot are present
    const SCREENSHOT_PATCH_KEY = 'screenshot_members_patch_v1';
    if (!localStorage.getItem(SCREENSHOT_PATCH_KEY)) {
      const screenshotMembers = [
        { name: 'Kiann Sev B. Tejada', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '12/07/2010', address: 'Burgos, Paniqui Tarlac', parents_contact: '9560933949' },
        { name: 'Lysander Uriel Ventura', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '1/22/2011', address: 'Paniqui Tarlac', parents_contact: '9395128453' },
        { name: 'Raj Gabriel Pathak', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '3/25/2011', address: 'Pob. South Ramos', parents_contact: '9544973975' },
        { name: 'Aljihin B. Caronongan', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '12/12/2010', address: 'Coral Paniqui Tarlac', parents_contact: '9276031738' },
        { name: 'April Jane DelaCruz', chapter_area: 'WEST', role: 'Member', contact: '9926539259', email: '', status: 'Active', age: 15, birthday: '04/30/2011', address: 'Cabaruan, Purok 2 Sta. Ignacia, Tarlac', parents_contact: '9770490513' },
        { name: 'Sharina Bona', chapter_area: 'WEST', role: 'Member', contact: '', email: '', status: 'Active', age: 15, birthday: '10/30/2010', address: 'San Franscisco, Sta. Ignacia Tarlac', parents_contact: '9635901351' },
        { name: 'Raphael Carl P Rivera', chapter_area: 'WEST', role: 'Member', contact: '9562477438', email: '', status: 'Active', age: 15, birthday: '12/02/2010', address: 'Pob. West Sta.Ignacia Tarlac', parents_contact: '9275324596' },
        { name: 'Jerecho P. Rivera', chapter_area: 'WEST', role: 'Member', contact: '9685851155', email: '', status: 'Active', age: 17, birthday: '10/19/2008', address: 'Pob. West Sta.Ignacia Tarlac', parents_contact: '9203408895' },
        { name: 'Jay Aldrin A. Marticio', chapter_area: 'EAST', role: 'Member', contact: '9163282336', email: '', status: 'Active', age: 17, birthday: '04/29/2009', address: 'Pob. West Sta.Ignacia Tarlac', parents_contact: '9203408895' },
        { name: 'Cyril John Roque', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '2/14/2012', address: 'Batang Batang Tarlac City', parents_contact: '9519893272' },
        { name: 'Chena Mae Matias', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 17, birthday: '4/14/2010', address: 'Batang Batang Tarlac City', parents_contact: '9670072185' },
        { name: 'Kian L. Notarte', chapter_area: 'EAST', role: 'Member', contact: '9072538395', email: '', status: 'Active', age: 15, birthday: '12/9/2010', address: 'Batang Batang Tarlac City', parents_contact: '9457784480' },
        { name: 'Fredierick R. Antalan', chapter_area: 'EAST', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '11/09/2011', address: 'Batang Batang Tarlac City', parents_contact: '' },
        { name: 'Harrieth C. Valdez', chapter_area: 'NORTH', role: 'Member', contact: '9091990427', email: '', status: 'Active', age: 16, birthday: '9/24/2009', address: 'Moncada, Tarlac', parents_contact: '9272328857' },
        { name: 'Evangeline M. Obilio', chapter_area: 'NORTH', role: 'Member', contact: '9648210825', email: '', status: 'Active', age: 14, birthday: '03/23/2012', address: 'Moncada, Tarlac', parents_contact: '9301028385' },
        { name: 'Jona Mariz A. De Venecia', chapter_area: 'NORTH', role: 'Member', contact: '9058660626', email: '', status: 'Active', age: 15, birthday: '6/8/2010', address: 'Moncada, Tarlac', parents_contact: '9550847346' },
        { name: 'Joevelyn Rhixzy G. Espejo', chapter_area: 'NORTH', role: 'Member', contact: '9639097664', email: '', status: 'Active', age: 18, birthday: '3/30/2008', address: 'Moncada, Tarlac', parents_contact: '9124661843' },
        { name: 'Jhazelle E. Balmorez', chapter_area: 'NORTH', role: 'Member', contact: '9816860482', email: '', status: 'Active', age: 15, birthday: '10/20/2010', address: 'Moncada, Tarlac', parents_contact: '935309587' },
        { name: 'Chedz Louise C. Tabilin', chapter_area: 'NORTH', role: 'Member', contact: '9816860482', email: '', status: 'Active', age: 13, birthday: '6/7/2012', address: 'Moncada, Tarlac', parents_contact: '9338156014' },
        { name: 'Aron Kent G. Salvador', chapter_area: 'NORTH', role: 'Member', contact: '9615832773', email: '', status: 'Active', age: 18, birthday: '03/09/2008', address: 'Salumague, Paniqui Tarlac', parents_contact: '9300467665' },
        { name: 'Fernando A. Dar', chapter_area: 'NORTH', role: 'Member', contact: '9454878873', email: '', status: 'Active', age: 18, birthday: '4/26/2008', address: 'Moncada, Tarlac', parents_contact: '9296699956' },
        { name: 'Ma. Yvonne C. Niegos', chapter_area: 'NORTH', role: 'Member', contact: '9289720379', email: '', status: 'Active', age: 17, birthday: '9/9/2008', address: 'Moncada, Tarlac', parents_contact: '9957240313' },
        { name: 'Leah Andrea C. Casica', chapter_area: 'NORTH', role: 'Member', contact: '91615833532', email: '', status: 'Active', age: 17, birthday: '4/5/2009', address: 'PacPaco San Manuel Moncada, Tarlac', parents_contact: '9486473102' },
        { name: 'Renz Cyruz P. Sapla', chapter_area: 'NORTH', role: 'Member', contact: '9685853306', email: '', status: 'Active', age: 17, birthday: '10/14/2008', address: 'Moncada, Tarlac', parents_contact: '' },
        { name: 'Sophia Reign C. Pujol', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 12, birthday: '7/25/2013', address: 'Moncada, Tarlac', parents_contact: '' },
        { name: 'Riley Tiffany B. Egipto', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 16, birthday: '3/16/2010', address: 'Magaspac, Gerona Tarlac', parents_contact: '9278825052' },
        { name: 'Antonia G. Egipto', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 12, birthday: '6/28/2013', address: 'Magaspac, Gerona Tarlac', parents_contact: '9672539992' },
        { name: 'Liselle Ondrea B. Egipto', chapter_area: 'NORTH', role: 'Member', contact: '', email: '', status: 'Active', age: 14, birthday: '1/9/2012', address: 'Magaspac, Gerona Tarlac', parents_contact: '9278825652' }
      ];

      let maxId = this.members.length > 0 ? Math.max(...this.members.map(m => m.id || 0)) : 0;
      const existingNames = new Set(this.members.map(m => (m.name || '').trim().toLowerCase()));

      let added = 0;
      screenshotMembers.forEach(m => {
        const key = m.name.trim().toLowerCase();
        if (!existingNames.has(key)) {
          maxId++;
          this.members.push({ id: maxId, ...m });
          existingNames.add(key);
          added++;
        }
      });

      if (added > 0) {
        this.saveToStorage();
      }
      localStorage.setItem(SCREENSHOT_PATCH_KEY, 'true');
    }

    if (db) this.setupFirebaseSync();
  }

  setupFirebaseSync() {
    db.collection('members').onSnapshot(snapshot => {
      let isFirstLoad = false;
      if (snapshot.empty && this.members.length > 0) {
        this.members.forEach(member => {
          db.collection('members').doc(member.id.toString()).set(member);
        });
        isFirstLoad = true;
      }

      if (!isFirstLoad) {
        const newData = [];
        snapshot.forEach(doc => {
          newData.push(doc.data());
        });
        
        // Ensure Aguinaldo is assigned to West
        const aguinaldo = newData.find(m => m && m.name === 'Aguinaldo, Allen Kristian');
        if (aguinaldo && aguinaldo.chapter_area !== 'WEST') {
          aguinaldo.chapter_area = 'WEST';
          if (aguinaldo.id != null) {
            db.collection('members').doc(aguinaldo.id.toString()).set(aguinaldo);
          }
        }

        if (newData.length > 0 || snapshot.empty) {
          this.members = newData;
          this.saveToStorage();
          if (typeof refreshActiveView === 'function') refreshActiveView();
        }
      }
    });
  }

  loadFromStorage() {
    const data = localStorage.getItem(this.storageKey);
    if (!data) {
      localStorage.setItem(this.storageKey, JSON.stringify(SAMPLE_MEMBERS));
      return [...SAMPLE_MEMBERS];
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Error parsing localStorage member records:', e);
      return [];
    }
  }

  saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.members));
  }

  getAll() {
    return this.members;
  }

  getFiltered(filters = {}) {
    return this.members.filter(item => {
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const nameMatch = item.name && item.name.toLowerCase().includes(query);
        const roleMatch = item.role && item.role.toLowerCase().includes(query);
        const addressMatch = item.address && item.address.toLowerCase().includes(query);
        if (!nameMatch && !roleMatch && !addressMatch) return false;
      }
      if (filters.chapter && item.chapter_area !== filters.chapter) return false;
      if (filters.status && item.status !== filters.status) return false;
      return true;
    });
  }

  add(record) {
    const newId = this.members.length > 0 ? Math.max(...this.members.map(m => m.id)) + 1 : 1;
    const newRecord = {
      id: newId,
      name: record.name,
      chapter_area: record.chapter_area || '',
      role: record.role || 'Member',
      contact: record.contact || '',
      email: record.email || '',
      status: record.status || 'Active',
      age: parseInt(record.age) || 0,
      birthday: record.birthday || '',
      address: record.address || '',
      parents_contact: record.parents_contact || '',
      youthcamp_date: record.youthcamp_date || '',
      youthcamp_title: record.youthcamp_title || '',
      covenanted_date: record.covenanted_date || ''
    };
    this.members.push(newRecord);
    this.saveToStorage();
    if (db) db.collection('members').doc(newId.toString()).set(newRecord);
    return newRecord;
  }

  update(id, updatedFields) {
    const index = this.members.findIndex(m => m.id === parseInt(id));
    if (index !== -1) {
      this.members[index] = {
        ...this.members[index],
        ...updatedFields,
        age: parseInt(updatedFields.age) || 0
      };
      this.saveToStorage();
      if (db) db.collection('members').doc(id.toString()).set(this.members[index]);
      return true;
    }
    return false;
  }

  delete(id) {
    const index = this.members.findIndex(m => m.id === parseInt(id));
    if (index !== -1) {
      this.members.splice(index, 1);

      const dbActs = new ActivityDatabase();
      let changed = false;
      dbActs.getAll().forEach(act => {
        if (act.coordinator_id === id) {
          act.coordinator_id = null;
          changed = true;
        }
        if (act.attendee_ids && act.attendee_ids.includes(id)) {
          act.attendee_ids = act.attendee_ids.filter(aid => aid !== id);
          act.participants = act.attendee_ids.length;
          changed = true;
        }
      });
      if (changed) dbActs.saveToStorage();

      this.saveToStorage();
      if (db) db.collection('members').doc(id.toString()).delete();
      if (typeof renderActivities === 'function') renderActivities();
      return true;
    }
    return false;
  }

  import(records, mode = 'overwrite') {
    if (mode === 'overwrite') {
      this.members = [];
      if (db) db.collection('members').get().then(snap => snap.forEach(doc => doc.ref.delete()));
    }
    let maxId = this.members.length > 0 ? Math.max(...this.members.map(m => m.id)) : 0;
    records.forEach(record => {
      maxId++;
      const newMember = {
        id: maxId,
        name: record.name || 'Unnamed Member',
        chapter_area: record.chapter_area || '',
        role: record.role || 'Member',
        contact: record.contact || '',
        email: record.email || '',
        status: record.status || 'Active',
        age: parseInt(record.age) || 0,
        birthday: record.birthday || '',
        address: record.address || '',
        parents_contact: record.parents_contact || '',
        youthcamp_date: record.youthcamp_date || '',
        youthcamp_title: record.youthcamp_title || '',
        covenanted_date: record.covenanted_date || ''
      };
      this.members.push(newMember);
      if (db) db.collection('members').doc(maxId.toString()).set(newMember);
    });
    this.saveToStorage();
  }
}

// ==========================================
// 3. INITIALIZATION & CONTROLLERS
// ==========================================

const dbActivities = new ActivityDatabase();

const dbMembers = new MembersDatabase();

let currentActivityFilters = { search: '', month: '', chapter: '', status: '', semester: '' };
let currentMemberFilters = { search: '', chapter: '', status: '' };

let pendingActivityImport = null;
let pendingMemberImport = null;

// ==========================================
// FUNDS & EXPENSES DATABASE
// ==========================================

const SAMPLE_FUNDS = [];

class FundsDatabase {
  constructor() {
    this.storageKey = 'funds_db_records';
    const seeded = localStorage.getItem('seeded_funds_v1');
    if (!seeded) {
      localStorage.setItem(this.storageKey, JSON.stringify(SAMPLE_FUNDS));
      localStorage.setItem('seeded_funds_v1', 'true');
      this.records = [...SAMPLE_FUNDS];
    } else {
      this.records = this.loadFromStorage();
    }
    if (db) this.setupFirebaseSync();
  }

  setupFirebaseSync() {
    db.collection('funds').onSnapshot(snapshot => {
      let isFirstLoad = false;
      if (snapshot.empty && this.records.length > 0) {
        this.records.forEach(record => {
          db.collection('funds').doc(record.id.toString()).set(record);
        });
        isFirstLoad = true;
      }

      if (!isFirstLoad) {
        const newData = [];
        snapshot.forEach(doc => {
          newData.push(doc.data());
        });
        if (newData.length > 0 || snapshot.empty) {
          this.records = newData;
          this.saveToStorage();
          if (typeof refreshActiveView === 'function') refreshActiveView();
        }
      }
    });
  }
  loadFromStorage() {
    const data = localStorage.getItem(this.storageKey);
    if (!data) { localStorage.setItem(this.storageKey, JSON.stringify(SAMPLE_FUNDS)); return [...SAMPLE_FUNDS]; }
    try { return JSON.parse(data); } catch (e) { return []; }
  }
  saveToStorage() { localStorage.setItem(this.storageKey, JSON.stringify(this.records)); }
  getAll() { return this.records; }
  getFiltered(filters = {}) {
    return this.records.filter(r => {
      if (filters.search) {
        const q = filters.search.toLowerCase();
        if (!(r.description || '').toLowerCase().includes(q) && !(r.category || '').toLowerCase().includes(q)) return false;
      }
      if (filters.type && r.type !== filters.type) return false;
      return true;
    });
  }
  add(record) {
    const newId = this.records.length > 0 ? Math.max(...this.records.map(r => parseInt(r.id))) + 1 : 1;
    const newRecord = { id: newId, date: record.date || '', type: record.type || 'Expense', category: record.category || '', description: record.description || '', amount: parseFloat(record.amount) || 0, notes: record.notes || '' };
    this.records.push(newRecord);
    this.saveToStorage();
    if (db) db.collection('funds').doc(newId.toString()).set(newRecord);
    return newRecord;
  }
  update(id, fields) {
    const i = this.records.findIndex(r => r.id === parseInt(id));
    if (i !== -1) {
      this.records[i] = { ...this.records[i], ...fields, amount: parseFloat(fields.amount) || 0 };
      this.saveToStorage();
      if (db) db.collection('funds').doc(id.toString()).set(this.records[i]);
      return true;
    }
    return false;
  }
  delete(id) {
    const i = this.records.findIndex(r => r.id === parseInt(id));
    if (i !== -1) {
      this.records.splice(i, 1);
      this.saveToStorage();
      if (db) db.collection('funds').doc(id.toString()).delete();
      return true;
    }
    return false;
  }
}

const dbFunds = new FundsDatabase();

class ResourcesDatabase {
  constructor() {
    this.storageKey = 'resources_db_records_v1';
    this.records = this.loadFromStorage();
    if (db) this.setupFirebaseSync();
  }
  
  setupFirebaseSync() {
    db.collection('resources').onSnapshot(snapshot => {
      let isFirstLoad = false;
      if (snapshot.empty && this.records.length > 0) {
        this.records.forEach(r => db.collection('resources').doc(r.id.toString()).set(r));
        isFirstLoad = true;
      }
      
      if (!isFirstLoad) {
        const newData = [];
        snapshot.forEach(doc => newData.push(doc.data()));
        if (newData.length > 0 || snapshot.empty) {
          this.records = newData;
          this.saveToStorage();
          if (typeof currentResourceCategory !== 'undefined') renderResources(currentResourceCategory);
        }
      }
    });
  }

  loadFromStorage() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.records));
  }

  getAll() {
    return this.records.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  add(record) {
    record.id = Date.now() + Math.floor(Math.random() * 1000);
    record.date = new Date().toISOString();
    this.records.push(record);
    this.saveToStorage();
    if (db) db.collection('resources').doc(record.id.toString()).set(record);
    return record;
  }

  delete(id) {
    const i = this.records.findIndex(r => r.id === parseInt(id));
    if (i !== -1) {
      this.records.splice(i, 1);
      this.saveToStorage();
      if (db) db.collection('resources').doc(id.toString()).delete();
      return true;
    }
    return false;
  }
}

const dbResources = new ResourcesDatabase();
let currentResourceCategory = 'youthcamp';

// Tab elements
const tabDashboard = document.getElementById('tab-dashboard');
const tabActivities = document.getElementById('tab-activities');
const tabMembers = document.getElementById('tab-members');
const tabAttendance = document.getElementById('tab-attendance');
const tabFunds = document.getElementById('tab-funds');
const tabAgenda = document.getElementById('tab-agenda');
const tabLeaders = document.getElementById('tab-leaders');
const tabOrgChart = document.getElementById('tab-orgchart');
const tabResources = document.getElementById('tab-resources');
const panelDashboard = document.getElementById('panel-dashboard');
const panelActivities = document.getElementById('panel-activities');
const panelMembers = document.getElementById('panel-members');
const panelAttendance = document.getElementById('panel-attendance');
const panelFunds = document.getElementById('panel-funds');
const panelAgenda = document.getElementById('panel-agenda');
const panelLeaders = document.getElementById('panel-leaders');
const panelOrgChart = document.getElementById('panel-orgchart');
const panelResources = document.getElementById('panel-resources');
const panelAccounts = document.getElementById('panel-accounts');

// Header action buttons

const btnAddMember = document.getElementById('btn-add-member');

// Admin Auth State & Default Passcode Seed
if (!localStorage.getItem('admin_passcode') || localStorage.getItem('admin_passcode') === 'mfcyouthtarlac') {
  localStorage.setItem('admin_passcode', 'mfcyouthtarlac');
}
let isAdmin = localStorage.getItem('is_admin') === 'true';

// Reset admin authentication (clear passcode and admin flag)
function resetAdminAuth() {
  // Remove stored credentials
  localStorage.removeItem('admin_passcode');
  localStorage.removeItem('is_admin');
  // Re-initialize with default passcode and ensure admin flag is false
  localStorage.setItem('admin_passcode', 'mfcyouthtarlac');
  localStorage.setItem('is_admin', 'false');
  isAdmin = false;
  alert('Admin authentication has been reset to default.');
}

// ==========================================
// TAB CONTROLLER
// ==========================================

function switchTab(tabName, subTabName = null) {
  panelDashboard?.classList.add('hidden');
  panelActivities?.classList.add('hidden');
  panelMembers?.classList.add('hidden');
  panelAttendance?.classList.add('hidden');
  panelFunds?.classList.add('hidden');
  panelAgenda?.classList.add('hidden');
  panelLeaders?.classList.add('hidden');
  panelOrgChart?.classList.add('hidden');
  panelResources?.classList.add('hidden');
  panelAccounts?.classList.add('hidden');

  tabDashboard?.classList.remove('active');
  tabActivities?.classList.remove('active');
  tabMembers?.classList.remove('active');
  tabAttendance?.classList.remove('active');
  tabFunds?.classList.remove('active');
  tabAgenda?.classList.remove('active');
  tabLeaders?.classList.remove('active');
  tabOrgChart?.classList.remove('active');
  tabResources?.classList.remove('active');
  const tabAccounts = document.getElementById('sidebar-tab-accounts');
  if (tabAccounts) tabAccounts.classList.remove('active');

  document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
  document.querySelectorAll('.sidebar-sublink').forEach(link => link.classList.remove('active'));

  const sidebarActiveTab = document.getElementById(`sidebar-tab-${tabName}`);
  if (sidebarActiveTab) sidebarActiveTab.classList.add('active');

  if (subTabName) {
    const sidebarActiveSubTab = document.getElementById(`sidebar-subtab-${tabName}-${subTabName}`);
    if (sidebarActiveSubTab) sidebarActiveSubTab.classList.add('active');

    if (tabName === 'members') {
      const chapterValue = subTabName.toUpperCase();
      const filterEl = document.getElementById('filter-member-chapter');
      if (filterEl) {
        filterEl.value = chapterValue;
        if (typeof currentMemberFilters !== 'undefined') {
          currentMemberFilters.chapter = chapterValue;
        }
      }
    } else if (tabName === 'activities') {
      if (subTabName === 'first-semester' || subTabName === 'second-semester' || subTabName === 'covenanted') {
        currentActivityFilters.semester = subTabName;
        currentActivityFilters.month = '';
        const monthFilterEl = document.getElementById('filter-month');
        if (monthFilterEl) monthFilterEl.value = '';
      }
    }
  } else {
    if (tabName === 'activities') {
      currentActivityFilters.semester = '';
    }
  }

  closeSidebar();

  if (tabName === 'dashboard') {
    if (tabDashboard) tabDashboard.classList.add('active');
    if (panelDashboard) panelDashboard.classList.remove('hidden');
    renderDashboard();
  } else if (tabName === 'activities') {
    tabActivities?.classList.add('active');
    panelActivities?.classList.remove('hidden');
    renderActivities();
  } else if (tabName === 'members') {
    tabMembers?.classList.add('active');
    panelMembers?.classList.remove('hidden');
    if (isAdmin) btnAddMember?.classList.remove('hidden');
    renderMembers();
  } else if (tabName === 'attendance') {
    tabAttendance?.classList.add('active');
    panelAttendance?.classList.remove('hidden');
    initAttendanceTab();
  } else if (tabName === 'funds') {
    tabFunds?.classList.add('active');
    panelFunds?.classList.remove('hidden');
    const btnAddFund = document.getElementById('btn-add-fund');
    if (isAdmin) btnAddFund?.classList.remove('hidden');
    renderFunds();
  } else if (tabName === 'agenda') {
    tabAgenda?.classList.add('active');
    panelAgenda?.classList.remove('hidden');
    renderFullAgendaList();
    renderLateAgendaList();
    renderAccomplishedAgendaList();
  } else if (tabName === 'leaders') {
    tabLeaders?.classList.add('active');
    panelLeaders?.classList.remove('hidden');
    if (isAdmin) {
      const btnAddLeader = document.getElementById('btn-add-leader');
      if (btnAddLeader) btnAddLeader.classList.remove('hidden');
    }
    renderLeaders();
  } else if (tabName === 'orgchart') {
    tabOrgChart?.classList.add('active');
    panelOrgChart?.classList.remove('hidden');
    renderOrgChart();
  } else if (tabName === 'resources') {
    tabResources?.classList.add('active');
    panelResources?.classList.remove('hidden');
    
    currentResourceCategory = subTabName;
    const resTitle = document.getElementById('resources-title');
    const resSubtitle = document.getElementById('resources-subtitle');
    if (resTitle && resSubtitle) {
      if (subTabName === 'youthcamp') {
        resTitle.innerHTML = '<i data-lucide="tent"></i> Youthcamp';
        resSubtitle.textContent = 'Files and guidelines for Youthcamp';
      } else if (subTabName === 'trainings') {
        resTitle.innerHTML = '<i data-lucide="book-open"></i> Trainings';
        resSubtitle.textContent = 'Training materials';
      } else if (subTabName === 'songboard') {
        resTitle.innerHTML = '<i data-lucide="music"></i> Songboard';
        resSubtitle.textContent = 'Lyrics and chords';
      } else if (subTabName === 'holy-rosary') {
        resTitle.innerHTML = '<i data-lucide="heart"></i> Holy Rosary';
        resSubtitle.textContent = 'Rosary guides and prayers';
      } else {
        resTitle.innerHTML = '<i data-lucide="folder-open"></i> Resources';
        resSubtitle.textContent = 'Access learning materials and guidelines';
      }
      lucide.createIcons();
    }
    renderResources(subTabName);
  } else if (tabName === 'accounts') {
    const tabAccounts = document.getElementById('sidebar-tab-accounts');
    if (tabAccounts) tabAccounts.classList.add('active');
    if (panelAccounts) panelAccounts.classList.remove('hidden');
    renderAccounts();
  }
  lucide.createIcons();
}

// ==========================================
// ACCOUNT MANAGEMENT (RBAC)
// ==========================================
const btnCreateAccount = document.getElementById('btn-create-account');
const accountModal = document.getElementById('account-modal');
const accountForm = document.getElementById('account-form');
const btnCloseAccountModal = document.getElementById('btn-close-account-modal');
const btnCancelAccountModal = document.getElementById('btn-cancel-account-modal');
const roleSelect = document.getElementById('field-account-role');
const chapterGroup = document.getElementById('group-account-chapter');
const accountsTableBody = document.getElementById('accounts-table-body');
const noAccountsMessage = document.getElementById('no-accounts-message');

if (roleSelect) {
  roleSelect.addEventListener('change', () => {
    if (roleSelect.value === 'chapterhead') {
      chapterGroup.classList.remove('hidden');
    } else {
      chapterGroup.classList.add('hidden');
    }
  });
}

if (btnCreateAccount) {
  btnCreateAccount.addEventListener('click', () => {
    accountForm.reset();
    document.getElementById('account-modal-error').classList.add('hidden');
    chapterGroup.classList.add('hidden');
    accountModal.classList.remove('hidden');
  });
}
if (btnCloseAccountModal) btnCloseAccountModal.addEventListener('click', () => accountModal.classList.add('hidden'));
if (btnCancelAccountModal) btnCancelAccountModal.addEventListener('click', () => accountModal.classList.add('hidden'));

if (accountForm) {
  accountForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('field-account-email').value;
    const password = document.getElementById('field-account-password').value;
    const role = document.getElementById('field-account-role').value;
    const chapter = document.getElementById('field-account-chapter').value;
    const errObj = document.getElementById('account-modal-error');
    const btn = document.getElementById('btn-submit-account');
    
    btn.disabled = true;
    btn.textContent = 'Creating...';
    
    try {
      const secondaryApp = firebase.initializeApp(firebaseConfig, "Secondary");
      await secondaryApp.auth().createUserWithEmailAndPassword(email, password);
      await secondaryApp.auth().signOut();
      
      // Save role in firestore
      await db.collection('users').doc(email).set({
        email: email,
        role: role,
        chapter: role === 'chapterhead' ? chapter : null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      
      accountModal.classList.add('hidden');
      renderAccounts();
    } catch (err) {
      errObj.textContent = err.message;
      errObj.classList.remove('hidden');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Create User';
      // Clean up secondary app
      firebase.app("Secondary").delete().catch(()=>console.log('Error deleting secondary app'));
    }
  });
}

function renderAccounts() {
  if (!db || !accountsTableBody) return;
  db.collection('users').get().then(snapshot => {
    accountsTableBody.innerHTML = '';
    if (snapshot.empty) {
      if (noAccountsMessage) noAccountsMessage.classList.remove('hidden');
    } else {
      if (noAccountsMessage) noAccountsMessage.classList.add('hidden');
      snapshot.forEach(doc => {
        const data = doc.data();
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${data.email}</strong></td>
          <td><span class="badge ${data.role === 'superadmin' ? 'badge-status active' : 'badge-status pending'}">${data.role === 'superadmin' ? 'Super Admin' : 'Chapter Head'}</span></td>
          <td>${data.chapter || '-'}</td>
          <td>
            <button class="btn-icon delete" onclick="deleteAccount('${data.email}')" title="Delete account">
              <i data-lucide="trash-2"></i>
            </button>
          </td>
        `;
        accountsTableBody.appendChild(tr);
      });
      lucide.createIcons();
    }
  });
}

window.deleteAccount = async function(email) {
  if (confirm(`Are you sure you want to delete the role for ${email}? (Note: This only deletes their access, not their Authentication account due to Firebase client limits).`)) {
    await db.collection('users').doc(email).delete();
    renderAccounts();
  }
};

tabDashboard.addEventListener('click', () => switchTab('dashboard'));
tabActivities.addEventListener('click', () => switchTab('activities'));
tabMembers.addEventListener('click', () => switchTab('members'));
tabAttendance.addEventListener('click', () => switchTab('attendance'));
tabFunds.addEventListener('click', () => switchTab('funds'));
tabAgenda.addEventListener('click', () => switchTab('agenda'));
tabLeaders.addEventListener('click', () => switchTab('leaders'));
tabOrgChart.addEventListener('click', () => switchTab('orgchart'));

// ==========================================
// ACTIVITIES TRACKER CONTROLLER
// ==========================================

const cardsContainer = document.getElementById('activities-cards-container');
const noRecordsMessage = document.getElementById('no-records-message');
const totalStatEl = document.getElementById('stat-total');
const accomplishedStatEl = document.getElementById('stat-accomplished');
const membersStatEl = document.getElementById('stat-members');
const activitiesActiveMembersStatEl = document.getElementById('stat-active-members');
const activitiesInactiveMembersStatEl = document.getElementById('stat-inactive-members');
const cancelledStatEl = document.getElementById('stat-cancelled');
const pendingStatEl = document.getElementById('stat-pending');

// Filters
const searchInput = document.getElementById('filter-search');
const monthFilter = document.getElementById('filter-month');
const chapterFilter = document.getElementById('filter-chapter');
const statusFilter = document.getElementById('filter-status');
const btnRefreshData = document.getElementById('btn-refresh-data');

function renderActivities() {
  const bannerTitle = document.getElementById('activities-banner-title');
  const bannerSubtitle = document.getElementById('activities-banner-subtitle');
  if (bannerTitle && bannerSubtitle) {
    if (currentActivityFilters.semester === 'first-semester') {
      bannerTitle.textContent = 'First Semester (Jan - Jun)';
      bannerSubtitle.textContent = 'Activities accomplished during the first semester.';
    } else if (currentActivityFilters.semester === 'second-semester') {
      bannerTitle.textContent = 'Second Semester (Jul - Dec)';
      bannerSubtitle.textContent = 'Activities accomplished during the second semester.';
    } else if (currentActivityFilters.semester === 'covenanted') {
      bannerTitle.textContent = 'Covenanted Activities';
      bannerSubtitle.textContent = 'Activities specifically for covenanted members.';
    } else {
      bannerTitle.textContent = 'Accomplished Activities';
      bannerSubtitle.textContent = 'View the complete history of your accomplished activities and access related documents.';
    }
  }
  let filteredData = dbActivities.getFiltered(currentActivityFilters);
  filteredData = filteredData.filter(item => item.status === 'Accomplished');

  const members = dbMembers.getAll();
  const activeMembersCount = members.filter(m => (m.status || 'Active').toLowerCase() === 'active').length;

  // Sort ascending by date
  filteredData.sort((a, b) => {
    const dateA = a.date ? new Date(a.date.split(' or ')[0]) : new Date(0);
    const dateB = b.date ? new Date(b.date.split(' or ')[0]) : new Date(0);
    return dateA - dateB;
  });

  if (!cardsContainer) return;
  cardsContainer.innerHTML = '';

  if (filteredData.length === 0) {
    noRecordsMessage.classList.remove('hidden');
    document.getElementById('activities-pagination').style.display = 'none';
  } else {
    noRecordsMessage.classList.add('hidden');
    document.getElementById('activities-pagination').style.display = 'flex';

    // Pagination slicing
    const totalPages = Math.ceil(filteredData.length / activitiesPerPage);
    if (currentActivitiesPage > totalPages) currentActivitiesPage = totalPages;
    if (currentActivitiesPage < 1) currentActivitiesPage = 1;

    document.getElementById('activities-page-info').textContent = `Page ${currentActivitiesPage} of ${totalPages}`;
    document.getElementById('btn-activities-prev').disabled = currentActivitiesPage === 1;
    document.getElementById('btn-activities-next').disabled = currentActivitiesPage === totalPages;

    const startIndex = (currentActivitiesPage - 1) * activitiesPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + activitiesPerPage);

    paginatedData.forEach(item => {
      const statusClass = item.status ? item.status.toLowerCase() : 'pending';
      const statusLabel = item.status || 'Pending';
      const statusBadge = `<span class="activity-card-badge status-${statusClass}">${statusLabel}</span>`;

      let attendeeTagsHtml = '';
      if (Array.isArray(item.attendee_ids) && item.attendee_ids.length > 0) {
        item.attendee_ids.forEach(id => {
          const member = members.find(m => m.id === id);
          if (member) {
            attendeeTagsHtml += `<button class="activity-card-attendee-btn">${member.name}</button>`;
          }
        });
      }

      const pCount = Array.isArray(item.attendee_ids) ? item.attendee_ids.length : 0;
      const rate = activeMembersCount > 0 ? ((pCount / activeMembersCount) * 100).toFixed(1) : '0.0';

      const dateText = formatDateRange(item.date, item.date_end) || 'No Date';
      const subtitleText = item.chapter_area ? `${item.chapter_area} Chapter / Area` : 'All Chapters / Areas';

      const card = document.createElement('div');
      card.className = 'activity-card';
      card.innerHTML = `
        <div class="activity-card-header">
          <span class="activity-card-date-header">${dateText.toUpperCase()}</span>
          ${statusBadge}
        </div>
        <h3 class="activity-card-title">${item.activity}${item.title ? ` <span class="activity-card-event-title">${item.title}</span>` : ''}</h3>
        <p class="activity-card-subtitle">${subtitleText}</p>
        
        <hr class="activity-card-divider">
        
        <div class="activity-card-meta">
          <div><strong>Held In:</strong> ${item.held_in || 'TBA'}</div>
          <div><strong>Venue:</strong> ${item.venue || 'TBA'}</div>
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div><strong>Participants:</strong> ${pCount} present</div>
            <div style="display: flex; align-items: center; gap: 0.25rem;">
              <strong>Attendance Rate:</strong> ${rate}%
              <i data-lucide="refresh-cw" style="width: 14px; height: 14px; cursor: pointer; color: var(--primary);" title="Sync rate"></i>
            </div>
          </div>
        </div>
        
        ${attendeeTagsHtml ? `
          <div class="activity-card-documents">
            <h4 class="activity-card-section-title" style="margin-top: 1rem; margin-bottom: 0.5rem; font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Available Documents</h4>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <button class="btn btn-outline btn-small doc-btn" onclick="downloadActivityPDF(${item.id}, 'ATTENDANCE')" style="background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3);"><i data-lucide="download" style="width:12px;height:12px;margin-right:4px;"></i>PDF</button>
            </div>
          </div>
          <div class="activity-card-attendees" style="display: none; margin-top: 1rem;">
            <h4 class="activity-card-section-title">Attendees</h4>
            <div class="activity-card-attendees-list">
              ${attendeeTagsHtml}
            </div>
          </div>
        ` : ''}
      `;
      cardsContainer.appendChild(card);
    });
  }

  renderDashboard();
  renderFullAgendaList();
  renderLateAgendaList();
  renderAccomplishedAgendaList();
  lucide.createIcons();
}

function renderDashboard() {
  // Scope data to chapter for chapter heads
  const isChapterHead = currentUserRole === 'chapterhead' && currentUserChapter;
  const allData = isChapterHead
    ? dbActivities.getAll().filter(a => a.chapter === currentUserChapter)
    : dbActivities.getAll();
  const allMembers = isChapterHead
    ? dbMembers.getAll().filter(m => m.chapter === currentUserChapter)
    : dbMembers.getAll();

  totalStatEl.textContent = allData.length;
  accomplishedStatEl.textContent = allData.filter(item => item.status === 'Accomplished').length;
  membersStatEl.textContent = allMembers.length;
  activitiesActiveMembersStatEl.textContent = allMembers.filter(m => (m.status || 'Active').toLowerCase() === 'active').length;
  activitiesInactiveMembersStatEl.textContent = allMembers.filter(m => (m.status || '').toLowerCase() === 'inactive').length;
  cancelledStatEl.textContent = allData.filter(item => item.status === 'Cancelled' || item.status === 'Rescheduled').length;
  if (pendingStatEl) {
    pendingStatEl.textContent = allData.filter(item => !item.status || item.status === 'Pending').length;
  }

  renderTodaySchedule();
  renderUpcomingActivities();
  updateDashboardChart();
}

let activityStatusChartInstance = null;

function updateDashboardChart() {
  const allData = dbActivities.getAll();
  const total = allData.length;

  let accomplished = 0;
  let cancelled = 0;
  let rescheduled = 0;
  let pending = 0;

  allData.forEach(item => {
    const s = item.status || '';
    if (s === 'Accomplished') accomplished++;
    else if (s === 'Cancelled') cancelled++;
    else if (s === 'Rescheduled') rescheduled++;
    else pending++;
  });

  const ctx = document.getElementById('activityStatusChart');
  if (!ctx) return;

  const chartData = [accomplished, cancelled, rescheduled, pending];
  const chartLabels = ['Accomplished', 'Cancelled', 'Rescheduled', 'Pending'];
  const chartColors = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6'];

  if (activityStatusChartInstance) {
    activityStatusChartInstance.data.datasets[0].data = chartData;
    activityStatusChartInstance.update();
  } else {
    if (typeof Chart !== 'undefined') {
      activityStatusChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: chartLabels,
          datasets: [{
            data: chartData,
            backgroundColor: chartColors,
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return ` ${context.label} - ${context.raw}`;
                }
              }
            }
          }
        }
      });
    }
  }

  const legendEl = document.getElementById('activityStatusLegend');
  if (legendEl) {
    let legendHtml = '';
    chartLabels.forEach((label, i) => {
      legendHtml += `
        <div class="legend-item">
          <div class="legend-color" style="background-color: ${chartColors[i]}"></div>
          <span>${label}</span>
        </div>
      `;
    });
    legendEl.innerHTML = legendHtml;
  }

  const tableEl = document.getElementById('activityStatusTable');
  if (tableEl) {
    const totalCountEl = document.getElementById('chart-total-count');
    if (totalCountEl) totalCountEl.textContent = total;

    const tbody = tableEl.querySelector('tbody');
    let rowsHtml = '';
    chartLabels.forEach((label, i) => {
      rowsHtml += `
        <tr>
          <td>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <div class="legend-color" style="background-color: ${chartColors[i]}"></div>
              <span>${label}</span>
            </div>
          </td>
          <td class="text-right">${chartData[i]}</td>
        </tr>
      `;
    });
    tbody.innerHTML = rowsHtml;
  }
}

function renderTodaySchedule() {
  const allActivities = dbActivities.getAll();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todaysActivities = allActivities.filter(act => {
    if (!act.date) return false;
    const rawDate = act.date.split(' or ')[0].trim();
    const d = new Date(rawDate);
    if (isNaN(d)) return false;
    d.setHours(0, 0, 0, 0);
    return d.getTime() === today.getTime();
  });

  todaysActivities.sort((a, b) => {
    const da = new Date(today);
    if (a.time) { const [h, m] = a.time.split(':'); da.setHours(parseInt(h, 10), parseInt(m, 10)); }
    const db = new Date(today);
    if (b.time) { const [h, m] = b.time.split(':'); db.setHours(parseInt(h, 10), parseInt(m, 10)); }
    return da - db;
  });

  const contentEl = document.getElementById('today-activity-content');
  if (todaysActivities.length === 0) {
    contentEl.innerHTML = `
      <div class="empty-state">
        <i data-lucide="calendar-off" style="width: 48px; height: 48px; opacity: 0.5; margin-bottom: 1rem;"></i>
        <p>No activities scheduled for today</p>
      </div>
    `;
  } else {
    let html = '<div style="display: flex; flex-direction: column; gap: 0;">';
    todaysActivities.forEach(act => {
      let timeFormatted = 'TBA';
      if (act.time) {
        const [h, m] = act.time.split(':');
        const hNum = parseInt(h, 10);
        const ampm = hNum >= 12 ? 'PM' : 'AM';
        const h12 = hNum % 12 || 12;
        timeFormatted = `${h12}:${m} ${ampm}`;
      }

      html += `
        <div class="dashboard-schedule-row">
          <div class="dashboard-schedule-time">
            ${timeFormatted}
          </div>
          <div class="dashboard-schedule-info">
            <h4 class="dashboard-schedule-title">${act.activity}</h4>
            <p class="dashboard-schedule-subtitle">${act.title ? act.title : (act.chapter_area || '-')}</p>
            <p class="dashboard-schedule-venue">${act.venue || 'TBA'}</p>
          </div>
        </div>
      `;
    });
    html += '</div>';
    contentEl.innerHTML = html;
  }
  lucide.createIcons();
}

function renderUpcomingActivities() {
  const allActivities = dbActivities.getAll();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingActivities = allActivities.filter(act => {
    if (!act.date) return false;
    const rawDate = act.date.split(' or ')[0].trim();
    const d = new Date(rawDate);
    if (isNaN(d)) return false;
    d.setHours(0, 0, 0, 0);
    return d.getTime() > today.getTime() && act.status !== 'Cancelled';
  });

  upcomingActivities.sort((a, b) => {
    const da = new Date(a.date.split(' or ')[0].trim());
    if (a.time) { const [h, m] = a.time.split(':'); da.setHours(parseInt(h, 10), parseInt(m, 10)); }
    const db = new Date(b.date.split(' or ')[0].trim());
    if (b.time) { const [h, m] = b.time.split(':'); db.setHours(parseInt(h, 10), parseInt(m, 10)); }
    return da - db;
  });

  const nextFive = upcomingActivities.slice(0, 5);

  const contentEl = document.getElementById('upcoming-activity-content');
  if (!contentEl) return;

  if (nextFive.length === 0) {
    contentEl.innerHTML = `
      <div class="empty-state">
        <i data-lucide="calendar-x" style="width: 48px; height: 48px; opacity: 0.5; margin-bottom: 1rem;"></i>
        <p>No upcoming activities scheduled</p>
      </div>
    `;
  } else {
    let html = '<div style="display: flex; flex-direction: column; gap: 0;">';
    nextFive.forEach(act => {
      const formattedDate = new Date(act.date.split(' or ')[0].trim()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

      let timeFormatted = 'TBA';
      if (act.time) {
        const [h, m] = act.time.split(':');
        const hNum = parseInt(h, 10);
        const ampm = hNum >= 12 ? 'PM' : 'AM';
        const h12 = hNum % 12 || 12;
        timeFormatted = `${h12}:${m} ${ampm}`;
      }

      html += `
        <div class="dashboard-schedule-row">
          <div class="dashboard-schedule-time">
            ${timeFormatted}
          </div>
          <div class="dashboard-schedule-info">
            <h4 class="dashboard-schedule-title">${act.activity}</h4>
            <p class="dashboard-schedule-subtitle">${act.title ? act.title : (act.chapter_area || '-')} • ${formattedDate}</p>
            <p class="dashboard-schedule-venue">${act.venue || 'TBA'}</p>
          </div>
        </div>
      `;
    });
    html += '</div>';
    contentEl.innerHTML = html;
  }
  lucide.createIcons();
}

function renderUpcomingAgenda() {
  const allActivities = dbActivities.getAll();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter: not Accomplished, not Cancelled, AND date is today or in the future
  const upcoming = allActivities.filter(act => {
    if (act.status === 'Accomplished' || act.status === 'Cancelled') return false;
    const rawDate = act.date ? act.date.split(' or ')[0].trim() : '';
    if (!rawDate) return true; // no date = include in upcoming by default
    const d = new Date(rawDate);
    if (isNaN(d)) return true;
    d.setHours(0, 0, 0, 0);
    return d >= today; // only today or future
  });

  // Sort ascending by date
  upcoming.sort((a, b) => {
    const dateA = a.date ? new Date(a.date.split(' or ')[0]) : new Date(0);
    if (a.time && dateA.getTime() !== 0) { const [h, m] = a.time.split(':'); dateA.setHours(parseInt(h, 10), parseInt(m, 10)); }
    const dateB = b.date ? new Date(b.date.split(' or ')[0]) : new Date(0);
    if (b.time && dateB.getTime() !== 0) { const [h, m] = b.time.split(':'); dateB.setHours(parseInt(h, 10), parseInt(m, 10)); }
    return dateA - dateB;
  });

  // Update badge count
  const countEl = document.getElementById('agenda-count');
  if (countEl) {
    countEl.textContent = `${upcoming.length} Upcoming`;
  }

  const container = document.getElementById('agenda-list-container');
  if (!container) return;

  container.innerHTML = '';

  // Get top 3 upcoming
  const topUpcoming = upcoming.slice(0, 3);

  if (topUpcoming.length === 0) {
    container.innerHTML = `
      <div class="agenda-empty">
        <i data-lucide="calendar"></i>
        <p>No upcoming activities scheduled.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  topUpcoming.forEach(item => {
    const card = document.createElement('div');
    const chapterClass = item.chapter_area ? item.chapter_area.toLowerCase().replace(' ', '-') : 'none';
    card.className = `agenda-card chapter-${chapterClass}`;

    let chapterBadge = '';
    if (item.chapter_area) {
      chapterBadge = `<span class="badge badge-chapter ${chapterClass}">${item.chapter_area}</span>`;
    }

    let statusBadge = '';
    if (item.status) {
      statusBadge = `<span class="badge badge-status ${item.status.toLowerCase()}">${item.status}</span>`;
    } else {
      statusBadge = `<span class="badge badge-status pending">Pending</span>`;
    }

    let markBtn = '';
    if (isAdmin) {
      markBtn = `
        <button class="btn-mark-accomplished" onclick="quickAccomplishActivity(${item.id})" title="Mark as Accomplished">
          <i data-lucide="check"></i>
        </button>
      `;
    }

    card.innerHTML = `
      <div class="agenda-card-details">
        <span class="agenda-card-date">${formatDateString(item.date)} ${item.week ? `• ${item.week}` : ''}</span>
        <h3 class="agenda-card-title">${item.activity}</h3>
        <div class="agenda-card-badges">
          ${chapterBadge}
          ${statusBadge}
        </div>
        ${item.venue ? `
          <div class="agenda-card-venue">
            <i data-lucide="map-pin"></i> ${item.venue}
          </div>
        ` : ''}
      </div>
      ${markBtn}
    `;
    container.appendChild(card);
  });

  lucide.createIcons();
}

// ── Full Upcoming Agenda List ──
let fullAgendaShowAll = false;
const FULL_AGENDA_DEFAULT_LIMIT = 7;

function renderFullAgendaList() {
  const allActivities = dbActivities.getAll();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = allActivities.filter(act => {
    if (act.status === 'Accomplished' || act.status === 'Cancelled') return false;
    const rawDate = act.date ? act.date.split(' or ')[0].trim() : '';
    if (!rawDate) return true;
    const d = new Date(rawDate);
    if (isNaN(d)) return true;
    d.setHours(0, 0, 0, 0);
    return d >= today;
  }).sort((a, b) => {
    const dA = a.date ? new Date(a.date.split(' or ')[0]) : new Date(9e14);
    const dB = b.date ? new Date(b.date.split(' or ')[0]) : new Date(9e14);
    return dA - dB;
  });

  const countEl = document.getElementById('full-agenda-count');
  const toggleBtn = document.getElementById('btn-toggle-full-agenda');
  const container = document.getElementById('full-agenda-list');
  if (!container) return;

  if (countEl) countEl.textContent = `${upcoming.length} Activities`;

  const toShow = fullAgendaShowAll ? upcoming : upcoming.slice(0, FULL_AGENDA_DEFAULT_LIMIT);

  if (toggleBtn) {
    toggleBtn.textContent = fullAgendaShowAll ? 'Show Less' : `Show All (${upcoming.length})`;
    toggleBtn.style.display = upcoming.length > FULL_AGENDA_DEFAULT_LIMIT ? '' : 'none';
  }

  if (upcoming.length === 0) {
    container.innerHTML = `<div class="agenda-list-empty">No upcoming activities scheduled.</div>`;
    return;
  }

  container.innerHTML = buildAgendaRows(toShow);
  lucide.createIcons();
}

function buildAgendaRows(activities) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return activities.map(item => {
    const rawDate = item.date ? item.date.split(' or ')[0].trim() : '';
    const d = rawDate ? new Date(rawDate) : null;
    let daysUntil = null;
    if (d && !isNaN(d)) {
      d.setHours(0, 0, 0, 0);
      daysUntil = Math.round((d - today) / 86400000);
    }

    let countdownClass = '';
    let countdownNum = '?';
    let countdownLbl = 'days';

    if (item.status === 'Accomplished') {
      countdownClass = 'accomplished'; countdownNum = '✔'; countdownLbl = 'DONE';
    } else if (daysUntil === null) {
      countdownNum = '?'; countdownLbl = '';
    } else if (daysUntil === 0) {
      countdownClass = 'today'; countdownNum = ''; countdownLbl = 'TODAY';
    } else if (daysUntil < 0) {
      countdownClass = 'late'; countdownNum = Math.abs(daysUntil); countdownLbl = 'days late';
    } else if (daysUntil <= 7) {
      countdownClass = 'soon'; countdownNum = daysUntil; countdownLbl = 'days';
    } else {
      countdownNum = daysUntil; countdownLbl = 'days';
    }

    const chapterClass = item.chapter_area ? item.chapter_area.toLowerCase().replace(/ /g, '-') : 'none';
    const chapterBadge = item.chapter_area
      ? `<span class="badge badge-chapter ${chapterClass}">${item.chapter_area}</span>`
      : '';

    let timeFormatted = '';
    if (item.time) {
      const [h, m] = item.time.split(':');
      const hNum = parseInt(h, 10);
      const ampm = hNum >= 12 ? 'PM' : 'AM';
      const h12 = hNum % 12 || 12;
      timeFormatted = `${h12}:${m} ${ampm}`;
    }

    return `<div class="agenda-list-row">
      <div class="agenda-list-countdown ${countdownClass}">
        <span>${countdownNum}</span>
        <span class="countdown-label">${countdownLbl}</span>
      </div>
      <div class="agenda-list-info">
        <span class="ali-title">${item.activity}</span>
        <div class="ali-meta">
          <span>${formatDateString(item.date)}</span>
          ${item.time ? `<span class="dot">•</span><span>${timeFormatted}</span>` : ''}
          ${item.week ? `<span class="dot">•</span><span>${item.week}</span>` : ''}
          ${item.venue ? `<span class="dot">•</span><span>📍 ${item.venue}</span>` : ''}
        </div>
      </div>
      <div class="agenda-list-badges">
        ${chapterBadge}
      </div>
      <div class="agenda-list-actions">
        <button class="btn-icon edit" onclick="editActivity(${item.id});" title="Edit record">
          <i data-lucide="edit-3"></i>
        </button>
        <button class="btn-icon delete" onclick="deleteActivity(${item.id})" title="Delete record">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    </div>`;
  }).join('');
}

function renderLateAgendaList() {
  const allActivities = dbActivities.getAll();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const late = allActivities.filter(act => {
    if (act.status === 'Accomplished' || act.status === 'Cancelled') return false;
    const rawDate = act.date ? act.date.split(' or ')[0].trim() : '';
    if (!rawDate) return false;
    const d = new Date(rawDate);
    if (isNaN(d)) return false;
    d.setHours(0, 0, 0, 0);
    return d < today;
  }).sort((a, b) => {
    const dA = a.date ? new Date(a.date.split(' or ')[0]) : new Date(0);
    const dB = b.date ? new Date(b.date.split(' or ')[0]) : new Date(0);
    return dB - dA; // most recently overdue first
  });

  const section = document.getElementById('late-agenda-section');
  const countEl = document.getElementById('late-agenda-count');
  const container = document.getElementById('late-agenda-list');
  if (!section || !container) return;

  if (late.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = '';
  if (countEl) countEl.textContent = `${late.length} Activities`;

  container.innerHTML = buildAgendaRows(late);
  lucide.createIcons();
}

function renderAccomplishedAgendaList() {
  const allActivities = dbActivities.getAll();

  const accomplished = allActivities.filter(act => act.status === 'Accomplished')
    .sort((a, b) => {
      const dA = a.date ? new Date(a.date.split(' or ')[0]) : new Date(0);
      const dB = b.date ? new Date(b.date.split(' or ')[0]) : new Date(0);
      return dB - dA; // most recently accomplished first
    });

  const section = document.getElementById('accomplished-agenda-section');
  const countEl = document.getElementById('accomplished-agenda-count');
  const container = document.getElementById('accomplished-agenda-list');
  if (!section || !container) return;

  if (accomplished.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = '';
  if (countEl) countEl.textContent = `${accomplished.length} Activities`;

  container.innerHTML = buildAgendaRows(accomplished);

  lucide.createIcons();
}

function renderLateActivities() {
  const allActivities = dbActivities.getAll();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Late = not Accomplished/Cancelled and activity date is in the past
  const late = allActivities.filter(act => {
    if (act.status === 'Accomplished' || act.status === 'Cancelled') return false;
    const rawDate = act.date ? act.date.split(' or ')[0].trim() : '';
    if (!rawDate) return false;
    const d = new Date(rawDate);
    if (isNaN(d)) return false;
    d.setHours(0, 0, 0, 0);
    return d < today;
  });

  // Sort descending (most recently overdue first)
  late.sort((a, b) => {
    const dateA = a.date ? new Date(a.date.split(' or ')[0]) : new Date(0);
    const dateB = b.date ? new Date(b.date.split(' or ')[0]) : new Date(0);
    return dateB - dateA;
  });

  const section = document.getElementById('late-activities-section');
  const countEl = document.getElementById('late-count');
  const container = document.getElementById('late-list-container');
  if (!section || !container) return;

  if (late.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = '';
  if (countEl) countEl.textContent = `${late.length} Late`;

  container.innerHTML = '';

  late.forEach(item => {
    const card = document.createElement('div');
    const chapterClass = item.chapter_area ? item.chapter_area.toLowerCase().replace(' ', '-') : 'none';
    card.className = `agenda-card chapter-${chapterClass} late-card`;
    card.style.cssText = 'border-left-color:#f87171;background:rgba(239,68,68,0.06);';

    let chapterBadge = '';
    if (item.chapter_area) {
      chapterBadge = `<span class="badge badge-chapter ${chapterClass}">${item.chapter_area}</span>`;
    }

    const statusLabel = item.status || 'Pending';
    const statusBadge = `<span class="badge badge-status" style="background:rgba(239,68,68,0.15);color:#f87171;border:1px solid rgba(239,68,68,0.3);">🕐 ${statusLabel}</span>`;

    let markBtn = '';
    if (isAdmin) {
      markBtn = `
        <button class="btn-mark-accomplished" onclick="quickAccomplishActivity(${item.id})" title="Mark as Accomplished" style="background:rgba(239,68,68,0.15);color:#f87171;border:1px solid rgba(239,68,68,0.3);">
          <i data-lucide="check"></i>
        </button>
      `;
    }

    let timeFormatted = '';
    if (item.time) {
      const [h, m] = item.time.split(':');
      const hNum = parseInt(h, 10);
      const ampm = hNum >= 12 ? 'PM' : 'AM';
      const h12 = hNum % 12 || 12;
      timeFormatted = `• ${h12}:${m} ${ampm}`;
    }

    card.innerHTML = `
      <div class="agenda-card-details">
        <span class="agenda-card-date" style="color:#f87171;">${formatDateString(item.date)} ${timeFormatted} ${item.week ? `• ${item.week}` : ''} — <strong>OVERDUE</strong></span>
        <h3 class="agenda-card-title">${item.activity}</h3>
        <div class="agenda-card-badges">
          ${chapterBadge}
          ${statusBadge}
        </div>
        ${item.venue ? `
          <div class="agenda-card-venue">
            <i data-lucide="map-pin"></i> ${item.venue}
          </div>
        ` : ''}
      </div>
      ${markBtn}
    `;
    container.appendChild(card);
  });

  lucide.createIcons();
}

window.quickAccomplishActivity = function (id) {
  const activity = dbActivities.getAll().find(a => a.id === id);
  if (!activity) return;

  const ok = dbActivities.update(id, {
    status: 'Accomplished'
  });

  if (ok) {
    renderActivities();
    // If the attendance tab has this activity selected, update its fields
    if (Number(currentAttendanceActivityId) === id) {
      initAttendanceTab();
    }
  }
};

// Activity Filters Actions
function updateActivityFilters() {
  currentActivityFilters.search = searchInput.value;
  currentActivityFilters.month = monthFilter.value;
  currentActivityFilters.status = statusFilter.value;
  // Chapter heads are locked to their assigned chapter — ignore DOM value
  if (currentUserRole === 'chapterhead' && currentUserChapter) {
    currentActivityFilters.chapter = currentUserChapter;
    chapterFilter.value = currentUserChapter;
    chapterFilter.disabled = true;
  } else {
    currentActivityFilters.chapter = chapterFilter.value;
  }
  currentActivitiesPage = 1;
  renderActivities();
}

let currentActivitiesPage = 1;
const activitiesPerPage = 12;

document.getElementById('btn-activities-prev').addEventListener('click', () => {
  if (currentActivitiesPage > 1) {
    currentActivitiesPage--;
    renderActivities();
  }
});
document.getElementById('btn-activities-next').addEventListener('click', () => {
  currentActivitiesPage++;
  renderActivities();
});

searchInput.addEventListener('input', updateActivityFilters);
monthFilter.addEventListener('change', () => {
  currentActivityFilters.semester = '';
  document.querySelectorAll('.sidebar-sublink').forEach(link => {
    if (link.id.startsWith('sidebar-subtab-activities-')) {
      link.classList.remove('active');
    }
  });
  updateActivityFilters();
});
chapterFilter.addEventListener('change', updateActivityFilters);
statusFilter.addEventListener('change', updateActivityFilters);

btnRefreshData.addEventListener('click', () => {
  const icon = btnRefreshData.querySelector('i');
  if (icon) icon.classList.add('rotating');

  // Reload data from DB
  renderActivities();
  lucide.createIcons();

  setTimeout(() => {
    if (icon) icon.classList.remove('rotating');
  }, 500);
});

// Helper: Formats YYYY-MM-DD to "Month DD, YYYY"
function formatDateString(dateStr) {
  if (!dateStr) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const parts = dateStr.split('-');
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    if (isNaN(date.getTime())) return dateStr;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }
  return dateStr;
}

// Helper: Formats a date range for display in card headers (MONTH DD[–DD], YYYY)
function formatDateRange(dateStart, dateEnd) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  if (!dateStart || !/^\d{4}-\d{2}-\d{2}$/.test(dateStart)) return formatDateString(dateStart);
  const [sy, sm, sd] = dateStart.split('-');
  const startDate = new Date(sy, sm - 1, sd);
  if (isNaN(startDate.getTime())) return formatDateString(dateStart);
  const startMonth = months[startDate.getMonth()];
  const startDay = startDate.getDate();
  const startYear = startDate.getFullYear();
  if (dateEnd && /^\d{4}-\d{2}-\d{2}$/.test(dateEnd) && dateEnd !== dateStart) {
    const [ey, em, ed] = dateEnd.split('-');
    const endDate = new Date(ey, em - 1, ed);
    if (!isNaN(endDate.getTime())) {
      const endMonth = months[endDate.getMonth()];
      const endDay = endDate.getDate();
      const endYear = endDate.getFullYear();
      if (sy === ey && sm === em) {
        // Same month & year: "January 30–31, 2026"
        return `${startMonth} ${startDay}\u2013${endDay}, ${startYear}`;
      } else if (sy === ey) {
        // Same year different month: "January 30 – February 1, 2026"
        return `${startMonth} ${startDay} \u2013 ${endMonth} ${endDay}, ${startYear}`;
      } else {
        // Different years
        return `${startMonth} ${startDay}, ${startYear} \u2013 ${endMonth} ${endDay}, ${endYear}`;
      }
    }
  }
  return `${startMonth} ${startDay}, ${startYear}`;
}

// Calculate Month and Week from date
function getMonthAndWeek(dateStr) {
  if (!dateStr) return { month: '', week: '' };
  const parts = dateStr.split('-');
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  if (isNaN(date.getTime())) return { month: '', week: '' };

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthName = months[date.getMonth()];

  const day = date.getDate();
  let weekName = '';
  if (day <= 7) weekName = '1st Week';
  else if (day <= 14) weekName = '2nd Week';
  else if (day <= 21) weekName = '3rd Week';
  else if (day <= 28) weekName = '4th Week';
  else weekName = '5th Week';

  return { month: monthName, week: weekName };
}

// ==========================================
// MEMBERS DIRECTORY CONTROLLER
// ==========================================

const memberTableBody = document.getElementById('member-table-body');
const noMembersMessage = document.getElementById('no-members-message');
const totalMembersStatEl = document.getElementById('stat-members-total');
const activeMembersStatEl = document.getElementById('stat-members-active');
const leadersMembersStatEl = document.getElementById('stat-members-leaders');
const inactiveMembersStatEl = document.getElementById('stat-members-inactive');

// Member Filters
const memberSearchInput = document.getElementById('filter-member-search');
const memberChapterFilter = document.getElementById('filter-member-chapter');
const memberStatusFilter = document.getElementById('filter-member-status');


// Format member name to "Last Name, First Name Middle Name"
function formatMemberName(fullName) {
  if (!fullName) return '';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length <= 1) return fullName;
  const lastName = parts.pop();
  const rest = parts.join(' ');
  return `${lastName}, ${rest}`;
}

// Format birthday to MM/DD/YYYY from any stored format
function formatBirthday(val) {
  if (!val) return '-';
  // Handle YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
    const [y, m, d] = val.split('-');
    return `${m}/${d}/${y}`;
  }
  // Handle M/D/YYYY or MM/DD/YYYY — normalize to 2-digit month/day
  const parts = val.split('/');
  if (parts.length === 3) {
    const mm = parts[0].padStart(2, '0');
    const dd = parts[1].padStart(2, '0');
    return `${mm}/${dd}/${parts[2]}`;
  }
  return val;
}

function renderMembers() {
  const filteredData = dbMembers.getFiltered(currentMemberFilters);
  const allMembers = dbMembers.getAll();

  // Build a set of normalized names that appear more than once across ALL members
  const nameCount = {};
  allMembers.forEach(m => {
    const key = m.name.trim().toLowerCase();
    nameCount[key] = (nameCount[key] || 0) + 1;
  });
  const duplicateNames = new Set(Object.keys(nameCount).filter(k => nameCount[k] > 1));

  // Sort alphabetically by formatted name (Last Name first, case-insensitive)
  filteredData.sort((a, b) => {
    const nameA = formatMemberName(a.name || '');
    const nameB = formatMemberName(b.name || '');
    return nameA.localeCompare(nameB, undefined, { sensitivity: 'base' });
  });

  memberTableBody.innerHTML = '';
  if (filteredData.length === 0) {
    noMembersMessage.classList.remove('hidden');
    document.getElementById('members-pagination').style.display = 'none';
  } else {
    noMembersMessage.classList.add('hidden');
    document.getElementById('members-pagination').style.display = 'flex';
    
    // Pagination slicing
    const totalPages = Math.ceil(filteredData.length / membersPerPage);
    if (currentMembersPage > totalPages) currentMembersPage = totalPages;
    if (currentMembersPage < 1) currentMembersPage = 1;
    
    document.getElementById('members-page-info').textContent = `Page ${currentMembersPage} of ${totalPages}`;
    document.getElementById('btn-members-prev').disabled = currentMembersPage === 1;
    document.getElementById('btn-members-next').disabled = currentMembersPage === totalPages;

    const startIndex = (currentMembersPage - 1) * membersPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + membersPerPage);

    paginatedData.forEach(item => {
      const tr = document.createElement('tr');
      const statusClass = item.status ? item.status.toLowerCase() : 'inactive';
      const statusBadge = `<span class="badge badge-status ${statusClass}">${item.status || 'Inactive'}</span>`;

      let chapterBadge = '';
      if (item.chapter_area) {
        const chapterClass = item.chapter_area.toLowerCase().replace(' ', '-');
        chapterBadge = `<span class="badge badge-chapter ${chapterClass}">${item.chapter_area}</span>`;
      }

      const isDuplicate = duplicateNames.has(item.name.trim().toLowerCase());
      if (isDuplicate) {
        tr.style.background = 'rgba(251, 146, 60, 0.12)';
        tr.style.borderLeft = '3px solid #fb923c';
      }

      const duplicateBadge = isDuplicate
        ? `<span style="display:inline-block;margin-left:6px;padding:1px 7px;border-radius:999px;background:#fb923c;color:#fff;font-size:10px;font-weight:700;letter-spacing:.5px;vertical-align:middle;">DUPLICATE</span>`
        : '';

      let attendanceCount = 0;
      dbActivities.getAll().forEach(act => {
        if (act.attendee_ids && act.attendee_ids.some(id => String(id) === String(item.id))) {
          attendanceCount++;
        }
      });

      tr.innerHTML = `
        <td><strong>${formatMemberName(item.name)}</strong>${duplicateBadge}</td>
        <td>${chapterBadge || '-'}</td>
        <td>${item.role || 'Member'}</td>
        <td>${item.contact || '-'}</td>
        <td>${item.email ? `<a href="mailto:${item.email}" class="text-link">${item.email}</a>` : '-'}</td>
        <td>${formatBirthday(item.birthday)}</td>
        <td>${item.parents_contact || '-'}</td>
        <td>${formatBirthday(item.youthcamp_date)}</td>
        <td>${item.youthcamp_title || '-'}</td>
        <td>${formatBirthday(item.covenanted_date)}</td>
        <td><strong>${attendanceCount}</strong></td>
        <td>${statusBadge}</td>
        <td class="actions-col">
          <div class="btn-action-group">
            <button class="btn-icon info" onclick="viewMemberProfile(${item.id})" title="View Profile & History">
              <i data-lucide="user"></i>
            </button>
            <button class="btn-icon edit" onclick="editMember(${item.id})" title="Edit member">
              <i data-lucide="edit-3"></i>
            </button>
            <button class="btn-icon delete" onclick="deleteMember(${item.id})" title="Delete member">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      `;
      memberTableBody.appendChild(tr);
    });
  }

  // Dashboard Stats update (filtered by chapter)
  const chapterMembers = currentMemberFilters.chapter
    ? allMembers.filter(m => (m.chapter_area || '').toUpperCase() === currentMemberFilters.chapter.toUpperCase())
    : allMembers;

  totalMembersStatEl.textContent = chapterMembers.length;
  activeMembersStatEl.textContent = chapterMembers.filter(m => m.status === 'Active').length;
  inactiveMembersStatEl.textContent = chapterMembers.filter(m => m.status === 'Inactive').length;

  leadersMembersStatEl.textContent = chapterMembers.filter(m => {
    const role = (m.role || '').toLowerCase();
    return role.includes('servant') || role.includes('head') || role.includes('coordinator') || role.includes('leader');
  }).length;

  lucide.createIcons();
}

// Member Filters actions
function updateMemberFilters() {
  currentMemberFilters.search = memberSearchInput.value;
  currentMemberFilters.status = memberStatusFilter.value;
  // Chapter heads are locked to their assigned chapter — ignore DOM value
  if (currentUserRole === 'chapterhead' && currentUserChapter) {
    currentMemberFilters.chapter = currentUserChapter;
    memberChapterFilter.value = currentUserChapter;
    memberChapterFilter.disabled = true;
  } else {
    currentMemberFilters.chapter = memberChapterFilter.value;
  }
  currentMembersPage = 1;
  renderMembers();
}

memberSearchInput.addEventListener('input', updateMemberFilters);
memberChapterFilter.addEventListener('change', updateMemberFilters);
memberStatusFilter.addEventListener('change', updateMemberFilters);

let currentMembersPage = 1;
const membersPerPage = 50;

document.getElementById('btn-members-prev').addEventListener('click', () => {
  if (currentMembersPage > 1) {
    currentMembersPage--;
    renderMembers();
  }
});
document.getElementById('btn-members-next').addEventListener('click', () => {
  currentMembersPage++;
  renderMembers();
});


// ==========================================
// MODALS (ACTIVITIES)
// ==========================================

const activityModal = document.getElementById('activity-modal');
const modalTitle = document.getElementById('modal-title');
const activityForm = document.getElementById('activity-form');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancelModal = document.getElementById('btn-cancel-modal');

// Fields
const fieldId = document.getElementById('field-id');
const fieldDate = document.getElementById('field-date');
const fieldDateEnd = document.getElementById('field-date-end');
const fieldTime = document.getElementById('field-time');
const fieldMonth = document.getElementById('field-month');
const fieldWeek = document.getElementById('field-week');
const fieldActivity = document.getElementById('field-activity');
const fieldChapter = document.getElementById('field-chapter');
const fieldStatus = document.getElementById('field-status');
const fieldHeld = document.getElementById('field-held');

const fieldVenue = document.getElementById('field-venue');
const fieldTitle = document.getElementById('field-title');

fieldDate.addEventListener('change', (e) => {
  const { month, week } = getMonthAndWeek(e.target.value);
  fieldMonth.value = month;
  fieldWeek.value = week;
  // Enforce end date cannot be before start date
  if (fieldDateEnd) {
    fieldDateEnd.min = e.target.value;
    if (fieldDateEnd.value && fieldDateEnd.value < e.target.value) {
      fieldDateEnd.value = e.target.value;
    }
  }
});

function openAddActivityModal() {
  activityForm.reset();
  fieldId.value = '';
  modalTitle.textContent = 'Add Activity';
  activityModal.classList.remove('hidden');
}


const btnAgendaAddActivity = document.getElementById('btn-agenda-add-activity');
if (btnAgendaAddActivity) {
  btnAgendaAddActivity.addEventListener('click', openAddActivityModal);
}

function closeActivityModal() {
  activityModal.classList.add('hidden');
  activityForm.reset();
}

btnCloseModal.addEventListener('click', closeActivityModal);
btnCancelModal.addEventListener('click', closeActivityModal);

activityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = fieldId.value;

  const record = {
    date: fieldDate.value,
    date_end: fieldDateEnd ? fieldDateEnd.value : '',
    time: fieldTime ? fieldTime.value : '',
    month: fieldMonth.value.trim(),
    week: fieldWeek.value.trim(),
    activity: fieldActivity.value.trim(),
    title: fieldTitle ? fieldTitle.value.trim() : '',
    chapter_area: fieldChapter.value,
    status: fieldStatus.value,
    held_in: fieldHeld.value,
    venue: fieldVenue.value.trim()
  };

  if (id) {
    dbActivities.update(id, record);
  } else {
    record.participants = 0;
    record.attendee_ids = [];
    dbActivities.add(record);
  }
  closeActivityModal();
  renderActivities();
});

window.editActivity = function (id) {
  const record = dbActivities.getAll().find(a => a.id === id);
  if (!record) return;

  fieldId.value = record.id;
  if (/^\d{4}-\d{2}-\d{2}$/.test(record.date)) {
    fieldDate.value = record.date;
    if (fieldDateEnd) fieldDateEnd.min = record.date;
  } else {
    fieldDate.value = '';
  }
  if (fieldDateEnd) {
    fieldDateEnd.value = (record.date_end && /^\d{4}-\d{2}-\d{2}$/.test(record.date_end)) ? record.date_end : '';
  }
  if (fieldTime) fieldTime.value = record.time || '';
  fieldMonth.value = record.month || '';
  fieldWeek.value = record.week || '';
  fieldActivity.value = record.activity || '';
  if (fieldTitle) fieldTitle.value = record.title || '';
  fieldChapter.value = record.chapter_area || '';
  fieldStatus.value = record.status || '';
  fieldHeld.value = record.held_in || '';
  fieldVenue.value = record.venue || '';

  modalTitle.textContent = 'Edit Activity';
  activityModal.classList.remove('hidden');
};

window.deleteActivity = function (id) {
  if (confirm('Are you sure you want to delete this activity? This action cannot be undone.')) {
    dbActivities.delete(id);
    renderActivities();
  }
};

// ==========================================
// MODALS (MEMBERS)
// ==========================================

const memberModal = document.getElementById('member-modal');
const memberModalTitle = document.getElementById('member-modal-title');
const memberForm = document.getElementById('member-form');
const btnCloseMemberModal = document.getElementById('btn-close-member-modal');
const btnCancelMemberModal = document.getElementById('btn-cancel-member-modal');

// Fields
const fieldMemberId = document.getElementById('field-member-id');
const fieldMemberName = document.getElementById('field-member-name');
const fieldMemberFirstName = document.getElementById('field-member-firstname');
const fieldMemberMiddleName = document.getElementById('field-member-middlename');
const fieldMemberLastName = document.getElementById('field-member-lastname');
const fieldMemberChapter = document.getElementById('field-member-chapter');
const fieldMemberStatus = document.getElementById('field-member-status');
const fieldMemberRole = document.getElementById('field-member-role');
const fieldMemberEmail = document.getElementById('field-member-email');
const fieldMemberBirthday = document.getElementById('field-member-birthday');
const fieldMemberAge = document.getElementById('field-member-age');
const fieldMemberAddress = document.getElementById('field-member-address');
const fieldMemberContact = document.getElementById('field-member-contact');
const fieldMemberParentsContact = document.getElementById('field-member-parents-contact');
const fieldMemberYouthcampDate = document.getElementById('field-member-youthcamp-date');
const fieldMemberYouthcampTitle = document.getElementById('field-member-youthcamp-title');
const fieldMemberAvatarInput = document.getElementById('field-member-avatar');
const fieldMemberAvatarData = document.getElementById('field-member-avatar-data');
const memberAvatarPreview = document.getElementById('member-avatar-preview');
const memberAvatarIcon = document.getElementById('member-avatar-icon');
const btnClearMemberAvatar = document.getElementById('btn-clear-member-avatar');
const memberAvatarArea = document.getElementById('member-avatar-area');

function setMemberAvatarPreview(dataUrl) {
  if (dataUrl) {
    memberAvatarPreview.src = dataUrl;
    memberAvatarPreview.style.display = 'block';
    memberAvatarIcon.style.display = 'none';
    btnClearMemberAvatar.style.display = 'inline-block';
    memberAvatarArea.style.borderColor = 'rgba(99,102,241,0.6)';
    fieldMemberAvatarData.value = dataUrl;
  } else {
    memberAvatarPreview.src = '';
    memberAvatarPreview.style.display = 'none';
    memberAvatarIcon.style.display = 'block';
    btnClearMemberAvatar.style.display = 'none';
    memberAvatarArea.style.borderColor = 'rgba(255,255,255,0.2)';
    fieldMemberAvatarData.value = '';
    if (fieldMemberAvatarInput) fieldMemberAvatarInput.value = '';
  }
}

let currentCropper = null;
const cropperModal = document.getElementById('cropper-modal');
const cropperImage = document.getElementById('cropper-image');
const btnCloseCropperModal = document.getElementById('btn-close-cropper-modal');
const btnCancelCropper = document.getElementById('btn-cancel-cropper');
const btnSaveCropper = document.getElementById('btn-save-cropper');

if (fieldMemberAvatarInput) {
  fieldMemberAvatarInput.addEventListener('change', () => {
    const file = fieldMemberAvatarInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      cropperImage.src = e.target.result;
      cropperModal.classList.remove('hidden');

      if (currentCropper) {
        currentCropper.destroy();
      }
      // Initialize Cropper.js
      currentCropper = new Cropper(cropperImage, {
        aspectRatio: 1,
        viewMode: 1,
        autoCropArea: 1,
      });
    };
    reader.readAsDataURL(file);
  });
}

function closeCropperModal() {
  cropperModal.classList.add('hidden');
  if (currentCropper) {
    currentCropper.destroy();
    currentCropper = null;
  }
  if (fieldMemberAvatarInput) fieldMemberAvatarInput.value = '';
}

if (btnCloseCropperModal) btnCloseCropperModal.addEventListener('click', closeCropperModal);
if (btnCancelCropper) btnCancelCropper.addEventListener('click', closeCropperModal);

if (btnSaveCropper) {
  btnSaveCropper.addEventListener('click', () => {
    if (!currentCropper) return;
    // Get cropped area at 400x400
    const canvas = currentCropper.getCroppedCanvas({
      width: 400,
      height: 400,
      imageSmoothingEnabled: true,
      imageSmoothingQuality: 'high'
    });
    setMemberAvatarPreview(canvas.toDataURL('image/jpeg', 0.8));
    closeCropperModal();
  });
}

// Lightbox logic
const imageViewerModal = document.getElementById('image-viewer-modal');
const btnCloseImageViewer = document.getElementById('btn-close-image-viewer');
function closeImageViewer() {
  if (imageViewerModal) imageViewerModal.classList.add('hidden');
}
if (btnCloseImageViewer) btnCloseImageViewer.addEventListener('click', closeImageViewer);
if (imageViewerModal) imageViewerModal.addEventListener('click', (e) => {
  if (e.target === imageViewerModal) closeImageViewer();
});

if (btnClearMemberAvatar) {
  btnClearMemberAvatar.addEventListener('click', (e) => {
    e.stopPropagation();
    setMemberAvatarPreview(null);
  });
}

btnAddMember.addEventListener('click', () => {
  memberForm.reset();
  fieldMemberId.value = '';
  memberModalTitle.textContent = 'Add Member';
  memberModal.classList.remove('hidden');
});

function closeMemberModal() {
  memberModal.classList.add('hidden');
  memberForm.reset();
  setMemberAvatarPreview(null);
}

btnCloseMemberModal.addEventListener('click', closeMemberModal);
btnCancelMemberModal.addEventListener('click', closeMemberModal);

memberForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = fieldMemberId.value;
  const first = fieldMemberFirstName ? fieldMemberFirstName.value.trim() : '';
  const middle = fieldMemberMiddleName ? fieldMemberMiddleName.value.trim() : '';
  const last = fieldMemberLastName ? fieldMemberLastName.value.trim() : '';
  
  let fullName = '';
  if (first || last) {
    fullName = `${last}, ${first}`;
    if (middle) fullName += ` ${middle}`;
  } else {
    fullName = fieldMemberName.value.trim();
  }

  const record = {
    name: fullName,
    firstName: first,
    middleName: middle,
    lastName: last,
    chapter_area: fieldMemberChapter.value,
    status: fieldMemberStatus.value,
    role: fieldMemberRole.value.trim() || 'Member',
    email: fieldMemberEmail.value.trim(),
    birthday: fieldMemberBirthday.value.trim(),
    age: parseInt(fieldMemberAge.value) || 0,
    address: fieldMemberAddress.value.trim(),
    contact: fieldMemberContact.value.trim(),
    parents_contact: fieldMemberParentsContact.value.trim(),
    youthcamp_date: fieldMemberYouthcampDate.value.trim(),
    youthcamp_title: fieldMemberYouthcampTitle.value.trim(),
    covenanted_date: (document.getElementById('field-member-covenanted-date') || {}).value?.trim() || '',
    avatar: fieldMemberAvatarData ? fieldMemberAvatarData.value : ''
  };

  if (id) {
    dbMembers.update(id, record);
  } else {
    dbMembers.add(record);
  }
  closeMemberModal();
  renderMembers();
});

window.editMember = function (id) {
  const record = dbMembers.getAll().find(m => m.id === id);
  if (!record) return;

  fieldMemberId.value = record.id;
  
  let first = record.firstName || '';
  let middle = record.middleName || '';
  let last = record.lastName || '';
  
  if (!first && !last && record.name) {
    const parts = record.name.split(',');
    if (parts.length === 2) {
      last = parts[0].trim();
      const rest = parts[1].trim().split(' ');
      if (rest.length > 1) {
        middle = rest.pop();
        first = rest.join(' ');
      } else {
        first = parts[1].trim();
      }
    } else {
      first = record.name;
    }
  }

  if (fieldMemberFirstName) fieldMemberFirstName.value = first;
  if (fieldMemberMiddleName) fieldMemberMiddleName.value = middle;
  if (fieldMemberLastName) fieldMemberLastName.value = last;
  fieldMemberName.value = record.name || '';
  fieldMemberChapter.value = record.chapter_area || '';
  fieldMemberStatus.value = record.status || 'Active';
  fieldMemberRole.value = record.role || '';
  fieldMemberEmail.value = record.email || '';

  function formatDateForInput(val) {
    if (!val) return '';
    if (/^\d{4}-\d{2}-\d{2}$/.test(val)) return val;
    const parts = val.split('/');
    if (parts.length === 3) {
      const m = parts[0].padStart(2, '0');
      const d = parts[1].padStart(2, '0');
      const y = parts[2];
      if (y.length === 4) return `${y}-${m}-${d}`;
    }
    const dDate = new Date(val);
    if (!isNaN(dDate.getTime())) return dDate.toISOString().split('T')[0];
    return '';
  }

  fieldMemberBirthday.value = formatDateForInput(record.birthday);
  fieldMemberAge.value = record.age || '';
  fieldMemberAddress.value = record.address || '';
  fieldMemberContact.value = record.contact || '';
  fieldMemberParentsContact.value = record.parents_contact || '';
  fieldMemberYouthcampDate.value = formatDateForInput(record.youthcamp_date);
  fieldMemberYouthcampTitle.value = record.youthcamp_title || '';

  // Set covenanted date if available
  const covenantedField = document.getElementById('field-member-covenanted-date');
  if (covenantedField) covenantedField.value = formatDateForInput(record.covenanted_date);

  if (typeof setMemberAvatarPreview === 'function') {
    setMemberAvatarPreview(record.avatar || null);
  }

  memberModalTitle.textContent = 'Edit Member';
  memberModal.classList.remove('hidden');
};

window.deleteMember = function (id) {
  if (confirm('Are you sure you want to delete this member? This will clear them as coordinator or attendee from activities. This action cannot be undone.')) {
    dbMembers.delete(id);
    renderMembers();
  }
};

// ==========================================
// MEMBER PROFILE DETAILS MODAL
// ==========================================

const memberProfileModal = document.getElementById('member-profile-modal');
const profileName = document.getElementById('profile-name');
const profileChapter = document.getElementById('profile-chapter');
const profileStatus = document.getElementById('profile-status');
const profileRole = document.getElementById('profile-role');
const profileContact = document.getElementById('profile-contact');
const profileEmail = document.getElementById('profile-email');
const profileBirthday = document.getElementById('profile-birthday');
const profileAge = document.getElementById('profile-age');
const profileParentsContact = document.getElementById('profile-parents-contact');
const profileAddress = document.getElementById('profile-address');
const countCoordinated = document.getElementById('count-coordinated');
const listCoordinated = document.getElementById('list-coordinated-activities');
const countAttended = document.getElementById('count-attended');
const listAttended = document.getElementById('list-attended-activities');

const btnCloseProfileModal = document.getElementById('btn-close-profile-modal');
const btnCloseProfileOk = document.getElementById('btn-close-profile-ok');
const btnProfileEdit = document.getElementById('btn-profile-edit');

let currentProfileMemberId = null;

window.viewMemberProfile = function (memberId) {
  currentProfileMemberId = parseInt(memberId);
  const member = dbMembers.getAll().find(m => m.id === parseInt(memberId));
  if (!member) return;

  // Profile Header summary
  profileName.textContent = member.name;
  profileChapter.className = `badge badge-chapter ${member.chapter_area ? member.chapter_area.toLowerCase().replace(' ', '-') : 'none'}`;
  profileChapter.textContent = member.chapter_area || 'No Chapter';
  profileStatus.className = `badge badge-status ${member.status ? member.status.toLowerCase() : 'inactive'}`;
  profileStatus.textContent = member.status || 'Inactive';

  const profileAvatarImg = document.getElementById('profile-avatar-img');
  const profileAvatarIcon = document.getElementById('profile-avatar-icon');
  if (member.avatar) {
    if (profileAvatarImg) {
      profileAvatarImg.src = member.avatar;
      profileAvatarImg.style.display = 'block';
      profileAvatarImg.style.cursor = 'pointer';
      profileAvatarImg.onclick = () => {
        const viewerModal = document.getElementById('image-viewer-modal');
        const viewerImg = document.getElementById('image-viewer-img');
        if (viewerModal && viewerImg) {
          viewerImg.src = member.avatar;
          viewerModal.classList.remove('hidden');
        }
      };
    }
    if (profileAvatarIcon) profileAvatarIcon.style.display = 'none';
  } else {
    if (profileAvatarImg) { profileAvatarImg.src = ''; profileAvatarImg.style.display = 'none'; profileAvatarImg.onclick = null; }
    if (profileAvatarIcon) profileAvatarIcon.style.display = 'block';
  }

  // Details
  profileRole.textContent = member.role || 'Member';
  profileContact.textContent = member.contact || 'No contact details';
  profileEmail.innerHTML = member.email ? `<a href="mailto:${member.email}" class="text-link">${member.email}</a>` : 'No email details';
  profileBirthday.textContent = member.birthday || 'No birthday info';
  profileAge.textContent = member.age || 'No age info';
  profileParentsContact.textContent = member.parents_contact || 'No parent contact info';
  profileAddress.textContent = member.address || 'No address info';

  // Load activities coordinated
  const allActs = dbActivities.getAll();
  const coordinatedActs = allActs.filter(a => a.coordinator_id === member.id);
  countCoordinated.textContent = coordinatedActs.length;
  listCoordinated.innerHTML = '';
  if (coordinatedActs.length === 0) {
    listCoordinated.innerHTML = '<li class="history-list-item"><span class="text-dim">No activities coordinated.</span></li>';
  } else {
    coordinatedActs.forEach(act => {
      const li = document.createElement('li');
      li.className = 'history-list-item';
      const statusBadge = act.status ? `<span class="badge badge-status ${act.status.toLowerCase()}">${act.status}</span>` : '';
      li.innerHTML = `
        <div>
          <span class="date">${formatDateString(act.date)}</span> - 
          <span class="title">${act.activity}</span>
        </div>
        ${statusBadge}
      `;
      listCoordinated.appendChild(li);
    });
  }

  // Load activities attended
  const attendedActs = allActs.filter(a => a.attendee_ids && a.attendee_ids.includes(member.id));
  countAttended.textContent = attendedActs.length;
  listAttended.innerHTML = '';
  if (attendedActs.length === 0) {
    listAttended.innerHTML = '<li class="history-list-item"><span class="text-dim">No activities attended.</span></li>';
  } else {
    attendedActs.forEach(act => {
      const li = document.createElement('li');
      li.className = 'history-list-item';
      const statusBadge = act.status ? `<span class="badge badge-status ${act.status.toLowerCase()}">${act.status}</span>` : '';
      li.innerHTML = `
        <div>
          <span class="date">${formatDateString(act.date)}</span> - 
          <span class="title">${act.activity}</span>
        </div>
        ${statusBadge}
      `;
      listAttended.appendChild(li);
    });
  }

  memberProfileModal.classList.remove('hidden');
  lucide.createIcons();
};

function closeProfileModal() {
  memberProfileModal.classList.add('hidden');
}

btnCloseProfileModal.addEventListener('click', closeProfileModal);
btnCloseProfileOk.addEventListener('click', closeProfileModal);

btnProfileEdit.addEventListener('click', () => {
  closeProfileModal();
  if (currentProfileMemberId) editMember(currentProfileMemberId);
});

// ==========================================
// FUNDS & EXPENSES CONTROLLER
// ==========================================

const fundsTableBody = document.getElementById('funds-table-body');
const noFundsMessage = document.getElementById('no-funds-message');
const statFundsIncome = document.getElementById('stat-funds-income');
const statFundsExpenses = document.getElementById('stat-funds-expenses');
const statFundsBalance = document.getElementById('stat-funds-balance');
const statFundsCount = document.getElementById('stat-funds-count');
const filterFundsSearch = document.getElementById('filter-funds-search');
const filterFundsType = document.getElementById('filter-funds-type');
const btnClearFundsFilters = document.getElementById('btn-clear-funds-filters');
const btnAddFund = document.getElementById('btn-add-fund');

let currentFundsFilters = { search: '', type: '' };

function formatPeso(amount) {
  return '₱' + Number(amount).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function renderFunds() {
  const filtered = dbFunds.getFiltered(currentFundsFilters);
  filtered.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  fundsTableBody.innerHTML = '';
  if (filtered.length === 0) {
    noFundsMessage.classList.remove('hidden');
  } else {
    noFundsMessage.classList.add('hidden');
    filtered.forEach(item => {
      const tr = document.createElement('tr');
      const isIncome = item.type === 'Income';
      const typeBadge = `<span class="badge badge-status ${isIncome ? 'accomplished' : 'cancelled'}" style="min-width:70px;text-align:center;">${item.type}</span>`;
      const amountStyle = isIncome ? 'color:#4ade80;font-weight:700;' : 'color:#f87171;font-weight:700;';
      tr.innerHTML = `
        <td>${formatDateString(item.date)}</td>
        <td>${typeBadge}</td>
        <td>${item.category || '-'}</td>
        <td><strong>${item.description || '-'}</strong></td>
        <td style="${amountStyle}">${isIncome ? '+' : '-'}${formatPeso(item.amount)}</td>
        <td>${item.notes || '-'}</td>
        <td class="actions-col">
          <div class="btn-action-group admin-only">
            <button class="btn-icon edit" onclick="editFund(${item.id})" title="Edit"><i data-lucide="edit-3"></i></button>
            <button class="btn-icon delete" onclick="deleteFund(${item.id})" title="Delete"><i data-lucide="trash-2"></i></button>
          </div>
        </td>
      `;
      fundsTableBody.appendChild(tr);
    });
  }

  // Stats
  const all = dbFunds.getAll();
  const totalIncome = all.filter(r => r.type === 'Income').reduce((s, r) => s + r.amount, 0);
  const totalExpenses = all.filter(r => r.type === 'Expense').reduce((s, r) => s + r.amount, 0);
  statFundsIncome.textContent = formatPeso(totalIncome);
  statFundsExpenses.textContent = formatPeso(totalExpenses);
  const balance = totalIncome - totalExpenses;
  statFundsBalance.textContent = formatPeso(balance);
  statFundsBalance.style.color = balance >= 0 ? '#4ade80' : '#f87171';
  statFundsCount.textContent = all.length;

  lucide.createIcons();
}

filterFundsSearch.addEventListener('input', () => { currentFundsFilters.search = filterFundsSearch.value; renderFunds(); });
filterFundsType.addEventListener('change', () => { currentFundsFilters.type = filterFundsType.value; renderFunds(); });
btnClearFundsFilters.addEventListener('click', () => { filterFundsSearch.value = ''; filterFundsType.value = ''; currentFundsFilters = { search: '', type: '' }; renderFunds(); });

// Fund Modal
const fundModal = document.getElementById('fund-modal');
const fundModalTitle = document.getElementById('fund-modal-title');
const fundForm = document.getElementById('fund-form');
const fieldFundId = document.getElementById('field-fund-id');
const fieldFundDate = document.getElementById('field-fund-date');
const fieldFundType = document.getElementById('field-fund-type');
const fieldFundCategory = document.getElementById('field-fund-category');
const fieldFundAmount = document.getElementById('field-fund-amount');
const fieldFundDescription = document.getElementById('field-fund-description');
const fieldFundNotes = document.getElementById('field-fund-notes');
const fieldFundReceiptInput = document.getElementById('field-fund-receipt');
const fieldFundReceiptData = document.getElementById('field-fund-receipt-data');
const fundReceiptPreview = document.getElementById('fund-receipt-preview');
const fundReceiptPlaceholder = document.getElementById('fund-receipt-placeholder');
const fundReceiptArea = document.getElementById('fund-receipt-area');
const btnClearReceipt = document.getElementById('btn-clear-receipt');

function setReceiptPreview(dataUrl) {
  if (dataUrl) {
    fundReceiptPreview.src = dataUrl;
    fundReceiptPreview.style.display = 'block';
    fundReceiptPlaceholder.style.display = 'none';
    btnClearReceipt.style.display = 'inline-flex';
    fundReceiptArea.style.borderColor = 'rgba(99,102,241,0.6)';
  } else {
    fundReceiptPreview.src = '';
    fundReceiptPreview.style.display = 'none';
    fundReceiptPlaceholder.style.display = 'block';
    btnClearReceipt.style.display = 'none';
    fundReceiptArea.style.borderColor = 'rgba(255,255,255,0.15)';
    fieldFundReceiptData.value = '';
    fieldFundReceiptInput.value = '';
  }
}

fieldFundReceiptInput.addEventListener('change', () => {
  const file = fieldFundReceiptInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    fieldFundReceiptData.value = e.target.result;
    setReceiptPreview(e.target.result);
    lucide.createIcons();
  };
  reader.readAsDataURL(file);
});

btnClearReceipt.addEventListener('click', (e) => { e.stopPropagation(); setReceiptPreview(null); });

function closeFundModal() { fundModal.classList.add('hidden'); fundForm.reset(); setReceiptPreview(null); }

btnAddFund.addEventListener('click', () => {
  fundForm.reset();
  fieldFundId.value = '';
  fundModalTitle.textContent = 'Add Record';
  fieldFundDate.value = new Date().toISOString().split('T')[0];
  setReceiptPreview(null);
  fundModal.classList.remove('hidden');
  lucide.createIcons();
});

document.getElementById('btn-close-fund-modal').addEventListener('click', closeFundModal);
document.getElementById('btn-cancel-fund-modal').addEventListener('click', closeFundModal);

fundForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = fieldFundId.value;
  const record = {
    date: fieldFundDate.value,
    type: fieldFundType.value,
    category: fieldFundCategory.value.trim(),
    amount: parseFloat(fieldFundAmount.value) || 0,
    description: fieldFundDescription.value.trim(),
    notes: fieldFundNotes.value.trim(),
    receipt_data: fieldFundReceiptData.value || ''
  };
  if (id) { dbFunds.update(id, record); } else { dbFunds.add(record); }
  closeFundModal();
  renderFunds();
});

window.editFund = function (id) {
  const r = dbFunds.getAll().find(x => x.id === id);
  if (!r) return;
  fieldFundId.value = r.id;
  fieldFundDate.value = r.date || '';
  fieldFundType.value = r.type || '';
  fieldFundCategory.value = r.category || '';
  fieldFundAmount.value = r.amount || '';
  fieldFundDescription.value = r.description || '';
  fieldFundNotes.value = r.notes || '';
  setReceiptPreview(r.receipt_data || null);
  fieldFundReceiptData.value = r.receipt_data || '';
  fundModalTitle.textContent = 'Edit Record';
  fundModal.classList.remove('hidden');
  lucide.createIcons();
};

window.deleteFund = function (id) {
  if (confirm('Delete this record? This cannot be undone.')) {
    dbFunds.delete(id);
    renderFunds();
  }
};

// ==========================================
// 6. ATTENDANCE TRACKER CONTROLLER
// ==========================================


const attendanceActivitySelect = document.getElementById('attendance-activity-select');
const attendanceChapterWrapper = document.getElementById('attendance-chapter-wrapper');
const attendanceChapterSelect = document.getElementById('attendance-chapter-select');
const attendanceSaveStatus = document.getElementById('attendance-save-status');
const saveStatusText = document.getElementById('save-status-text');
const attendanceInfoCard = document.getElementById('attendance-info-card');
const selectActivityPrompt = document.getElementById('select-activity-prompt');

// Info Card fields
const attendanceInfoDate = document.getElementById('attendance-info-date');
const attendanceInfoCoordinator = document.getElementById('attendance-info-coordinator');
const attendanceInfoChapter = document.getElementById('attendance-info-chapter');
const attendanceInfoVenue = document.getElementById('attendance-info-venue');
const attendanceInfoRate = document.getElementById('attendance-info-rate');
const attendanceInfoCount = document.getElementById('attendance-info-count');

// Sheet fields
const attendanceSheetSearch = document.getElementById('attendance-sheet-search');
const btnAttendanceSelectAll = document.getElementById('btn-attendance-select-all');
const btnAttendanceClearAll = document.getElementById('btn-attendance-clear-all');
const attendanceSheetTable = document.getElementById('attendance-sheet-table');
const attendanceSheetBody = document.getElementById('attendance-sheet-body');
const noAttendanceMembersMessage = document.getElementById('no-attendance-members-message');

let attendanceSheetAttendees = [];
let currentAttendanceActivityId = null;
let currentAttendanceSearch = '';

// ==========================================
// MONTHLY ATTENDANCE SUMMARY
// ==========================================
function renderMonthlySummary() {
  const tbody = document.getElementById('monthly-summary-body');
  if (!tbody) return;

  const activities = dbActivities.getAll();
  const totalMembers = dbMembers.getAll().length;

  // Group by month (use the `month` field, fallback to parsing date)
  const monthOrder = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const groups = {};

  activities.forEach(act => {
    const key = act.month || 'Unknown';
    if (!groups[key]) {
      groups[key] = { total: 0, accomplished: 0, cancelled: 0, attendance: 0, uniqueIds: new Set() };
    }
    const g = groups[key];
    g.total++;
    const s = (act.status || '').toLowerCase();
    if (s === 'accomplished') g.accomplished++;
    if (s === 'cancelled' || s === 'rescheduled') g.cancelled++;
    const ids = Array.isArray(act.attendee_ids) ? act.attendee_ids : [];
    g.attendance += ids.length;
    ids.forEach(id => g.uniqueIds.add(id));
  });

  // Sort months in calendar order
  const sortedMonths = Object.keys(groups).sort((a, b) => {
    return (monthOrder.indexOf(a) ?? 99) - (monthOrder.indexOf(b) ?? 99);
  });

  if (sortedMonths.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:2rem;">No activity data available.</td></tr>`;
    return;
  }

  tbody.innerHTML = sortedMonths.map(month => {
    const g = groups[month];
    const uniqueCount = g.uniqueIds.size;
    // Avg rate = total attendance / (accomplished activities × total members) × 100
    const denominator = g.accomplished * (totalMembers || 1);
    const rate = denominator > 0 ? Math.round((g.attendance / denominator) * 100) : 0;
    const rateClass = rate >= 70 ? 'high' : rate >= 40 ? 'mid' : rate > 0 ? 'low' : 'none';
    const rateLabel = denominator > 0 ? `${rate}%` : '—';
    return `<tr>
      <td><strong>${month}</strong></td>
      <td>${g.total}</td>
      <td><span style="color:#10b981;font-weight:600;">${g.accomplished}</span></td>
      <td><span style="color:#ef4444;font-weight:600;">${g.cancelled}</span></td>
      <td>${g.attendance}</td>
      <td>${uniqueCount}</td>
      <td><span class="rate-badge ${rateClass}">${rateLabel}</span></td>
    </tr>`;
  }).join('');

  // Totals row
  const totals = sortedMonths.reduce((acc, m) => {
    const g = groups[m];
    acc.total += g.total;
    acc.acc += g.accomplished;
    acc.can += g.cancelled;
    acc.att += g.attendance;
    acc.uniq = new Set([...acc.uniq, ...g.uniqueIds]);
    return acc;
  }, { total: 0, acc: 0, can: 0, att: 0, uniq: new Set() });

  tbody.innerHTML += `<tr style="border-top:2px solid var(--border-color);font-weight:700;color:var(--text-main);background:rgba(255,255,255,0.03);">
    <td>TOTAL</td>
    <td>${totals.total}</td>
    <td style="color:#10b981;">${totals.acc}</td>
    <td style="color:#ef4444;">${totals.can}</td>
    <td>${totals.att}</td>
    <td>${totals.uniq.size}</td>
    <td>—</td>
  </tr>`;
}

function initAttendanceTab() {
  renderMonthlySummary();

  // Dynamically populate the activity select from actual DB records
  populateAttendanceActivitySelect();

  if (currentAttendanceActivityId) {
    attendanceActivitySelect.value = currentAttendanceActivityId;
    if (attendanceActivitySelect.value) {
      loadActivityAttendance(currentAttendanceActivityId);
    } else {
      showAttendanceEmptyState();
    }
  } else {
    showAttendanceEmptyState();
  }
}

function populateAttendanceActivitySelect() {
  const activities = dbActivities.getAll();

  // Sort by date descending (most recent first)
  const sorted = [...activities].sort((a, b) => {
    const da = a.date ? new Date(a.date) : new Date(0);
    const db2 = b.date ? new Date(b.date) : new Date(0);
    return db2 - da;
  });

  const currentVal = attendanceActivitySelect.value;
  attendanceActivitySelect.innerHTML = '<option value="">Choose a specific scheduled Activity...</option>';

  // Hide the secondary chapter dropdown forever since we now list exact events
  if (attendanceChapterWrapper) {
    attendanceChapterWrapper.classList.add('hidden');
  }

  sorted.forEach(act => {
    const type = (act.activity || '').trim();
    if (!type) return;

    // Build display label: e.g., "Youth Camp (Usbong)"
    const titlePart = act.title ? ` (${act.title})` : '';
    const chapterPart = act.chapter_area ? ` - ${act.chapter_area}` : '';
    const datePart = act.date ? ` [${formatDateRange(act.date, act.date_end)}]` : '';

    const label = `${type}${titlePart}${chapterPart}${datePart}`;

    const el = document.createElement('option');
    el.value = act.id.toString();
    el.textContent = label;
    attendanceActivitySelect.appendChild(el);
  });

  // Restore selection
  if (currentVal) attendanceActivitySelect.value = currentVal;
}

function showAttendanceEmptyState() {
  attendanceInfoCard.classList.add('hidden');
  attendanceSheetTable.classList.add('hidden');
  noAttendanceMembersMessage.classList.add('hidden');
  selectActivityPrompt.classList.remove('hidden');
  if (attendanceSaveStatus) {
    attendanceSaveStatus.className = 'save-status-container';
    saveStatusText.textContent = 'Select an activity to begin';
  }
}

function handleAttendanceSelectChange() {
  const selectedId = attendanceActivitySelect.value;
  if (selectedId) {
    currentAttendanceActivityId = selectedId;
    loadActivityAttendance(selectedId);
  } else {
    currentAttendanceActivityId = null;
    showAttendanceEmptyState();
  }
}

attendanceActivitySelect.addEventListener('change', handleAttendanceSelectChange);
// Remove secondary dropdown listener as it's no longer used
if (attendanceChapterSelect) {
  attendanceChapterSelect.removeEventListener('change', handleAttendanceSelectChange);
}

function loadActivityAttendance(activityId) {
  selectActivityPrompt.classList.add('hidden');
  attendanceInfoCard.classList.remove('hidden');
  attendanceSheetTable.classList.remove('hidden');

  if (attendanceSaveStatus) {
    if (isAdmin) {
      attendanceSaveStatus.className = 'save-status-container saved';
      saveStatusText.textContent = 'All changes saved locally';
    } else {
      attendanceSaveStatus.className = 'save-status-container';
      saveStatusText.textContent = 'View Only Mode';
    }
  }

  // Load attendance directly from the Activity record
  const act = dbActivities.getAll().find(a => a.id === Number(activityId));
  if (act) {
    attendanceSheetAttendees = Array.isArray(act.attendee_ids) ? [...act.attendee_ids] : [];
  } else {
    attendanceSheetAttendees = [];
  }

  renderAttendanceSheet();
}

function renderAttendanceSheet() {
  const members = currentUserRole === 'chapterhead' && currentUserChapter
    ? dbMembers.getAll().filter(m => m.chapter === currentUserChapter)
    : dbMembers.getAll();
  members.sort((a, b) => a.name.localeCompare(b.name));

  const currentAct = dbActivities.getAll().find(a => a.id === Number(currentAttendanceActivityId));
  if (!currentAct) return;

  const targetChapter = (currentAct.chapter_area || '').toUpperCase();
  const activityType = currentAct.activity || '';

  const filteredMembers = members.filter(m => {
    // Filter by Activity Chapter/Area
    if (targetChapter && targetChapter !== 'AREA') {
      if ((m.chapter_area || '').toUpperCase() !== targetChapter) return false;
    }

    // Filter by Upper Core Household (only show Servants/Leaders, but exclude Household/Unit Heads)
    if (activityType === 'Upper Core Household') {
      const role = (m.role || '').toLowerCase();
      const isLeader = role.includes('servant') || role.includes('head') || role.includes('coordinator') || role.includes('leader');
      const isExcluded = role.includes('household head') || role.includes('unit head');
      if (!isLeader || isExcluded) return false;
    }

    // Filter by Lower Core HouseHold (only show Servants/Leaders)
    if (activityType === 'Lower Core HouseHold') {
      const role = (m.role || '').toLowerCase();
      const isLeader = role.includes('servant') || role.includes('head') || role.includes('coordinator') || role.includes('leader');
      if (!isLeader) return false;
    }

    // Filter by LIT (only show Area LIT Servants)
    if (activityType === 'LIT') {
      const role = (m.role || '').toLowerCase();
      if (!role.includes('area lit servant')) return false;
    }

    // Filter by Search Query
    if (currentAttendanceSearch) {
      const q = currentAttendanceSearch.toLowerCase();
      return m.name.toLowerCase().includes(q) || (m.role || '').toLowerCase().includes(q);
    }
    return true;
  });

  attendanceSheetBody.innerHTML = '';
  if (filteredMembers.length === 0) {
    noAttendanceMembersMessage.classList.remove('hidden');
  } else {
    noAttendanceMembersMessage.classList.add('hidden');

    filteredMembers.forEach(m => {
      const tr = document.createElement('tr');
      const isPresent = attendanceSheetAttendees.includes(m.id);
      const toggleBtnClass = isPresent ? 'present' : 'absent';
      const toggleBtnText = isPresent ? '<i data-lucide="check-circle-2"></i> Present' : '<i data-lucide="x-circle"></i> Absent';

      let chapterBadge = '';
      if (m.chapter_area) {
        const chapterClass = m.chapter_area.toLowerCase().replace(' ', '-');
        chapterBadge = `<span class="badge badge-chapter ${chapterClass}">${m.chapter_area}</span>`;
      }

      tr.innerHTML = `
        <td><strong>${m.name}</strong></td>
        <td>${chapterBadge || '-'}</td>
        <td>${m.role || 'Member'}</td>
        <td class="attendance-toggle-cell">
          <button class="status-toggle-btn ${toggleBtnClass}" onclick="toggleAttendeeStatus(${m.id})">
            ${toggleBtnText}
          </button>
        </td>
      `;
      attendanceSheetBody.appendChild(tr);
    });
  }

  const totalCount = members.length;
  const presentCount = attendanceSheetAttendees.length;
  const ratePercent = totalCount > 0 ? Math.round((presentCount / totalCount) * 100) : 0;

  attendanceInfoRate.textContent = `${ratePercent}%`;
  attendanceInfoCount.textContent = `(${presentCount} / ${totalCount} present)`;

  lucide.createIcons();
}

function saveAttendanceAutosave() {
  if (!currentAttendanceActivityId) return;

  const act = dbActivities.getAll().find(a => a.id === Number(currentAttendanceActivityId));
  if (act) {
    act.attendee_ids = [...attendanceSheetAttendees];
    act.participants = attendanceSheetAttendees.length;
    dbActivities.update(act.id, act);

    // Instantly update the top summary to reflect new attendance counts
    renderMonthlySummary();
  }

  if (attendanceSaveStatus && saveStatusText) {
    attendanceSaveStatus.className = 'save-status-container saving';
    saveStatusText.textContent = 'Saving changes...';

    if (window.autosaveTimeout) {
      clearTimeout(window.autosaveTimeout);
    }

    window.autosaveTimeout = setTimeout(() => {
      attendanceSaveStatus.className = 'save-status-container saved';
      saveStatusText.textContent = 'All changes saved locally';
    }, 400);
  }
}

function autoUpdateInactiveMembers() {
  const allActs = dbActivities.getAll()
    .filter(a => a.status === 'Accomplished' || a.status === 'Late')
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  if (allActs.length === 0) return;

  const members = dbMembers.getAll();
  let updatedAny = false;

  members.forEach(m => {
    if (m.status !== 'Active') return; // Only mark active ones as inactive

    let consecutiveAbsences = 0;
    for (let i = 0; i < allActs.length; i++) {
      const act = allActs[i];
      if (act.attendee_ids && act.attendee_ids.some(id => String(id) === String(m.id))) {
        break; // Attended, break streak
      } else {
        // Upper Core activities are not required, so missing them doesn't count as an absence
        const isUpperCore = (act.chapter_area === 'UPPER CORE') || (act.title && act.title.toLowerCase().includes('upper core'));
        if (!isUpperCore) {
          consecutiveAbsences++;
        }
      }
      if (consecutiveAbsences >= 10) break;
    }

    if (consecutiveAbsences >= 10) {
      m.status = 'Inactive';
      dbMembers.update(m.id, m);
      updatedAny = true;
    }
  });

  if (updatedAny) {
    // If we're currently on the members tab, it will re-render
    renderMembers();
  }
}

window.toggleAttendeeStatus = function (memberId) {
  const id = parseInt(memberId);
  const idx = attendanceSheetAttendees.indexOf(id);

  if (idx !== -1) {
    attendanceSheetAttendees.splice(idx, 1);
  } else {
    attendanceSheetAttendees.push(id);
  }

  renderAttendanceSheet();
  saveAttendanceAutosave();
};

attendanceSheetSearch.addEventListener('input', (e) => {
  currentAttendanceSearch = e.target.value;
  renderAttendanceSheet();
});

btnAttendanceSelectAll.addEventListener('click', () => {
  const members = dbMembers.getAll();
  const filtered = members.filter(m => {
    if (currentAttendanceSearch) {
      const q = currentAttendanceSearch.toLowerCase();
      return m.name.toLowerCase().includes(q) || (m.role || '').toLowerCase().includes(q);
    }
    return true;
  });

  filtered.forEach(m => {
    if (!attendanceSheetAttendees.includes(m.id)) {
      attendanceSheetAttendees.push(m.id);
    }
  });

  renderAttendanceSheet();
  saveAttendanceAutosave();
});

btnAttendanceClearAll.addEventListener('click', () => {
  const members = dbMembers.getAll();
  const filtered = members.filter(m => {
    if (currentAttendanceSearch) {
      const q = currentAttendanceSearch.toLowerCase();
      return m.name.toLowerCase().includes(q) || (m.role || '').toLowerCase().includes(q);
    }
    return true;
  });

  const idsToClear = filtered.map(m => m.id);
  attendanceSheetAttendees = attendanceSheetAttendees.filter(id => !idsToClear.includes(id));

  renderAttendanceSheet();
  saveAttendanceAutosave();
});

// Autosaved automatically on changes

// ==========================================
// IMPORT OPERATIONS
// ==========================================

const fileImportInput = document.getElementById('file-import-input');
const btnImportTrigger = document.getElementById('btn-import-trigger');
const importModal = document.getElementById('import-modal');
const importCountEl = document.getElementById('import-count');
const btnConfirmImport = document.getElementById('btn-confirm-import');
const btnCancelImport = document.getElementById('btn-cancel-import');
const btnCloseImportModal = document.getElementById('btn-close-import-modal');

btnImportTrigger.addEventListener('click', () => fileImportInput.click());

fileImportInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  if (file.name.endsWith('.json')) {
    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const data = JSON.parse(event.target.result);
        pendingActivityImport = Array.isArray(data) ? data : [data];
        if (pendingActivityImport.length === 0) {
          alert('Could not find any activity records in the JSON file.');
        } else {
          promptActivityImport();
        }
      } catch (err) {
        console.error('JSON parse error:', err);
        alert('Could not parse the JSON file.');
      }
      fileImportInput.value = '';
    };
    reader.readAsText(file);
    return;
  }

  if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
    alert('Only Excel files (.xlsx, .xls) and JSON files are allowed.');
    fileImportInput.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    try {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array', cellDates: true });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
      pendingActivityImport = parseSheetRows(rows, 'activities');
      if (pendingActivityImport.length === 0) {
        alert('Could not find any activity records in the Excel file.\n\nMake sure your Excel sheet has a header row with columns like: Activity, Date, Status, Chapter/Area, Venue, Held In.');
      } else {
        promptActivityImport();
      }
    } catch (err) {
      console.error('Excel parse error:', err);
      alert('Could not read the Excel file. Make sure it is a valid .xlsx or .xls file.');
    }
    fileImportInput.value = '';
  };
  reader.readAsArrayBuffer(file);
});

function promptActivityImport() {
  importCountEl.textContent = pendingActivityImport.length;
  importModal.classList.remove('hidden');
}

function closeImportModal() {
  importModal.classList.add('hidden');
  pendingActivityImport = null;
}

btnCloseImportModal.addEventListener('click', closeImportModal);
btnCancelImport.addEventListener('click', closeImportModal);

btnConfirmImport.addEventListener('click', () => {
  if (!pendingActivityImport) return;
  const mode = document.querySelector('input[name="import-mode"]:checked').value;
  dbActivities.import(pendingActivityImport, mode);
  closeImportModal();
  renderActivities();
  alert('Activities imported successfully!');
});


// Parse an array-of-arrays (from SheetJS) into activity records
function parseSheetRows(rows, type) {
  if (!rows || rows.length < 2) return [];
  const parsedRecords = [];
  const members = dbMembers.getAll();

  // First row = headers (convert everything to string, trim, lowercase)
  const headerRow = rows[0];
  const headers = headerRow.map(h => (h != null ? String(h).trim().toLowerCase() : ''));

  // Helper: get string value for a column index, return '' if missing/null
  const getCell = (line, idx) =>
    idx !== -1 && line[idx] != null ? String(line[idx]).trim() : '';

  // Helper: convert a raw cell value (or JS Date from SheetJS) to YYYY-MM-DD
  function toDbDate(val, rawCell) {
    if (rawCell instanceof Date && !isNaN(rawCell.getTime())) {
      const d = rawCell;
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }
    if (val) {
      const ts = Date.parse(val);
      if (!isNaN(ts)) {
        const d = new Date(ts);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      }
    }
    return val || '';
  }

  if (type === 'activities') {
    // Detect column positions — all optional, fall back to -1 (blank)
    const monthIdx = headers.findIndex(h => h.includes('month'));
    const weekIdx = headers.findIndex(h => h.includes('week'));
    const dateIdx = headers.findIndex(h => h.includes('date') && !h.includes('end'));
    const dateEndIdx = headers.findIndex(h => h.includes('end date') || h.includes('date end') || h.includes('date_end'));
    const activityIdx = headers.findIndex(h => h.includes('activity') || h.includes('event') || h.includes('title') || h.includes('name'));
    const chapterIdx = headers.findIndex(h => h.includes('chapter') || h.includes('area'));
    const coordinatorIdx = headers.findIndex(h => h.includes('coordinator') || h.includes('leader'));
    const statusIdx = headers.findIndex(h => h.includes('status'));
    const heldIdx = headers.findIndex(h => h.includes('held') || h.includes('mode'));
    const participantsIdx = headers.findIndex(h => h.includes('participant') || h.includes('# of'));
    const venueIdx = headers.findIndex(h => h.includes('venue') || h.includes('location'));
    const attendeesIdx = headers.findIndex(h => h.includes('attendee') || h.includes('participants list'));

    for (let i = 1; i < rows.length; i++) {
      const line = rows[i];
      // Skip fully empty rows
      if (!line || line.every(c => c === '' || c == null)) continue;

      // Activity name: use detected column, or fall back to first non-empty cell
      let activityVal = getCell(line, activityIdx);
      if (!activityVal) {
        // Try to find first non-empty cell value as a fallback
        const firstNonEmpty = line.find(c => c != null && String(c).trim() !== '');
        if (firstNonEmpty == null) continue; // truly empty row
        activityVal = String(firstNonEmpty).trim();
      }

      // Dates — handle both string values and native JS Date objects from SheetJS
      const rawDateCell = dateIdx !== -1 ? line[dateIdx] : null;
      const rawDateEndCell = dateEndIdx !== -1 ? line[dateEndIdx] : null;
      const rawDate = getCell(line, dateIdx);
      const rawDateEnd = getCell(line, dateEndIdx);
      const dbDate = toDbDate(rawDate, rawDateCell);
      const dbDateEnd = toDbDate(rawDateEnd, rawDateEndCell);

      // Coordinator lookup (match by name, leave null if not found)
      let coordId = null;
      const coordName = getCell(line, coordinatorIdx).toLowerCase();
      if (coordName) {
        const coordMember = members.find(m => m.name.toLowerCase() === coordName);
        if (coordMember) coordId = coordMember.id;
      }

      // Attendees — comma-separated names matched against member list
      let attIds = [];
      const attendeesStr = getCell(line, attendeesIdx);
      if (attendeesStr) {
        attendeesStr.split(',').map(n => n.trim().toLowerCase()).forEach(name => {
          const m = members.find(mem => mem.name.toLowerCase() === name);
          if (m) attIds.push(m.id);
        });
      }

      const item = {
        month: getCell(line, monthIdx),
        week: getCell(line, weekIdx),
        date: dbDate,
        date_end: dbDateEnd,
        activity: activityVal,
        chapter_area: getCell(line, chapterIdx).toUpperCase(),
        status: getCell(line, statusIdx),
        held_in: getCell(line, heldIdx),
        participants: parseInt(getCell(line, participantsIdx)) || 0,
        venue: getCell(line, venueIdx),
        coordinator_id: coordId,
        attendee_ids: attIds
      };

      // Auto-fill month/week from date if they were blank in the sheet
      if (!item.month && item.date && /^\d{4}-\d{2}-\d{2}$/.test(item.date)) {
        const calc = getMonthAndWeek(item.date);
        item.month = calc.month;
        item.week = item.week || calc.week;
      }

      parsedRecords.push(item);
    }
  }
  return parsedRecords;
}

function parseCSV(text, type) {
  const lines = [];
  let row = [""];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];
    if (c === '"') {
      if (inQuotes && next === '"') {
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',') {
      if (inQuotes) row[row.length - 1] += c;
      else row.push("");
    } else if (c === '\r' || c === '\n') {
      if (inQuotes) {
        row[row.length - 1] += c;
      } else {
        if (c === '\r' && next === '\n') i++;
        lines.push(row);
        row = [""];
      }
    } else {
      row[row.length - 1] += c;
    }
  }
  if (row.length > 1 || row[0] !== "") lines.push(row);
  if (lines.length < 2) return [];

  const headers = lines[0].map(h => h.trim().toLowerCase());
  const parsedRecords = [];

  if (type === 'activities') {
    const monthIdx = headers.findIndex(h => h.includes('month'));
    const weekIdx = headers.findIndex(h => h.includes('week'));
    const dateIdx = headers.findIndex(h => h.includes('date'));
    const activityIdx = headers.findIndex(h => h.includes('activity') || h.includes('event'));
    const chapterIdx = headers.findIndex(h => h.includes('chapter') || h.includes('area'));
    const coordinatorIdx = headers.findIndex(h => h.includes('coordinator') || h.includes('leader'));
    const statusIdx = headers.findIndex(h => h.includes('status'));
    const heldIdx = headers.findIndex(h => h.includes('held') || h.includes('mode'));
    const participantsIdx = headers.findIndex(h => h.includes('participant') || h.includes('# of'));
    const venueIdx = headers.findIndex(h => h.includes('venue') || h.includes('location'));
    const attendeesIdx = headers.findIndex(h => h.includes('attendee') || h.includes('participants list'));

    const members = dbMembers.getAll();

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (line.length === 0 || (line.length === 1 && line[0] === "")) continue;
      const activityVal = activityIdx !== -1 ? line[activityIdx] : '';
      if (!activityVal) continue;

      let rawDate = dateIdx !== -1 ? line[dateIdx] : '';
      let dbDate = rawDate;
      if (rawDate) {
        const parsedTimestamp = Date.parse(rawDate);
        if (!isNaN(parsedTimestamp)) {
          const d = new Date(parsedTimestamp);
          dbDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        }
      }

      let coordId = null;
      if (coordinatorIdx !== -1 && line[coordinatorIdx]) {
        const cName = line[coordinatorIdx].trim().toLowerCase();
        const coordMember = members.find(m => m.name.toLowerCase() === cName);
        if (coordMember) {
          coordId = coordMember.id;
        }
      }

      let attIds = [];
      if (attendeesIdx !== -1 && line[attendeesIdx]) {
        const names = line[attendeesIdx].split(',').map(n => n.trim().toLowerCase());
        names.forEach(name => {
          const m = members.find(mem => mem.name.toLowerCase() === name);
          if (m) {
            attIds.push(m.id);
          }
        });
      }

      const item = {
        month: monthIdx !== -1 ? line[monthIdx] : '',
        week: weekIdx !== -1 ? line[weekIdx] : '',
        date: dbDate || rawDate,
        activity: activityVal,
        chapter_area: chapterIdx !== -1 ? line[chapterIdx].toUpperCase() : '',
        status: statusIdx !== -1 ? line[statusIdx] : '',
        held_in: heldIdx !== -1 ? line[heldIdx] : '',
        participants: participantsIdx !== -1 ? parseInt(line[participantsIdx]) || 0 : 0,
        venue: venueIdx !== -1 ? line[venueIdx] : '',
        coordinator_id: coordId,
        attendee_ids: attIds
      };

      if (!item.month && item.date && /^\d{4}-\d{2}-\d{2}$/.test(item.date)) {
        const calculated = getMonthAndWeek(item.date);
        item.month = calculated.month;
        item.week = calculated.week;
      }
      parsedRecords.push(item);
    }
  } else if (type === 'members') {
    const nameIdx = headers.findIndex(h => h.includes('name'));
    const chapterIdx = headers.findIndex(h => h.includes('chapter') || h.includes('area'));
    const roleIdx = headers.findIndex(h => h.includes('role') || h.includes('designation') || h.includes('position'));
    const ageIdx = headers.findIndex(h => h.includes('age'));
    const birthdayIdx = headers.findIndex(h => h.includes('birthday') || h.includes('birth'));
    const addressIdx = headers.findIndex(h => h.includes('address') || h.includes('home'));
    const contactIdx = headers.findIndex(h => h.includes('contact') || h.includes('number') || h.includes('phone'));
    const parentContactIdx = headers.findIndex(h => h.includes('parent'));
    const emailIdx = headers.findIndex(h => h.includes('email') || h.includes('mail'));
    const statusIdx = headers.findIndex(h => h.includes('status') || h.includes('active'));

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (line.length === 0 || (line.length === 1 && line[0] === "")) continue;
      const nameVal = nameIdx !== -1 ? line[nameIdx] : '';
      if (!nameVal) continue;

      const item = {
        name: nameVal,
        chapter_area: chapterIdx !== -1 ? line[chapterIdx].toUpperCase() : '',
        role: roleIdx !== -1 ? line[roleIdx] : 'Member',
        age: ageIdx !== -1 ? parseInt(line[ageIdx]) || 0 : 0,
        birthday: birthdayIdx !== -1 ? line[birthdayIdx] : '',
        address: addressIdx !== -1 ? line[addressIdx] : '',
        contact: contactIdx !== -1 ? line[contactIdx] : '',
        parents_contact: parentContactIdx !== -1 ? line[parentContactIdx] : '',
        email: emailIdx !== -1 ? line[emailIdx] : '',
        status: statusIdx !== -1 ? (line[statusIdx].toLowerCase().includes('inactive') ? 'Inactive' : 'Active') : 'Active'
      };
      parsedRecords.push(item);
    }
  }

  return parsedRecords;
}

// ==========================================
// EXPORT OPERATIONS
// ==========================================

// JSON backup helper
function downloadJSON(data, filename) {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// CSV export helper
function downloadCSV(headers, rows, filename) {
  const csvRows = [headers.join(',')];
  rows.forEach(rowValues => {
    const escapedRow = rowValues.map(val => {
      const valStr = String(val);
      if (valStr.includes(',') || valStr.includes('"') || valStr.includes('\n') || valStr.includes('\r')) {
        return `"${valStr.replace(/"/g, '""')}"`;
      }
      return valStr;
    });
    csvRows.push(escapedRow.join(','));
  });
  const csvString = csvRows.join('\r\n');
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Activities exports
const btnExportCsv = document.getElementById('btn-export-csv');
const btnExportJson = document.getElementById('btn-export-json');

btnExportJson.addEventListener('click', () => {
  downloadJSON(dbActivities.getAll(), `activities_db_backup_${new Date().toISOString().split('T')[0]}.json`);
});

btnExportCsv.addEventListener('click', () => {
  const allData = [...dbActivities.getAll()];
  const members = dbMembers.getAll();

  allData.sort((a, b) => {
    const dateA = a.date ? new Date(a.date.split(' or ')[0]) : new Date(0);
    const dateB = b.date ? new Date(b.date.split(' or ')[0]) : new Date(0);
    return dateA - dateB;
  });

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('landscape');

  doc.setFontSize(16);
  doc.text('Activities Export', 14, 15);
  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 22);

  const headers = [['Month', 'Date', 'Activity', 'Chapter/Area', 'Coordinator', 'Status', 'Participants', 'Venue']];
  const rows = allData.map(item => {
    const coordName = item.coordinator_id ? (members.find(m => m.id === item.coordinator_id)?.name || '') : '';
    return [
      item.month || '',
      formatDateString(item.date),
      item.activity || '',
      item.chapter_area || '',
      coordName,
      item.status || '',
      item.participants || 0,
      item.venue || ''
    ];
  });

  doc.autoTable({
    head: headers,
    body: rows,
    startY: 28,
    theme: 'grid',
    styles: { fontSize: 8 },
    headStyles: { fillColor: [30, 58, 138] }
  });

  doc.save(`activities_export_${new Date().toISOString().split('T')[0]}.pdf`);
});



// ==========================================
// ADMIN AUTHENTICATION CONTROLLER & ACTIONS
// ==========================================

function updateRoleUI() {
  const body = document.body;
  const btnAuth = document.getElementById('btn-admin-auth');
  const adminOnlyMenu = document.getElementById('admin-only-menu');
  const dropdownUserName = document.getElementById('dropdown-user-name');
  const dropdownUserEmail = document.getElementById('dropdown-user-email');
  const dropdownAvatar = document.getElementById('dropdown-avatar');
  const saveStatusText = document.getElementById('save-status-text');
  const attendanceSaveStatus = document.getElementById('attendance-save-status');

  if (isAdmin) {
    body.classList.remove('view-only');
    if (adminOnlyMenu) adminOnlyMenu.classList.remove('hidden');
    if (btnAuth) btnAuth.classList.add('hidden'); // Hide login button from menu
    const currentEmail = localStorage.getItem('current_username') || 'admin@example.com';
    const roleText = currentUserRole === 'chapterhead' ? `Chapter Head (${currentUserChapter || 'Assigned Chapter'})` : 'Super Admin';
    const welcomeBanner = document.getElementById('welcome-banner-title');
    if (welcomeBanner) welcomeBanner.innerHTML = `Hello, ${currentEmail}! 👋`;
    if (dropdownUserName) dropdownUserName.textContent = currentEmail;
    if (dropdownUserEmail) dropdownUserEmail.textContent = roleText;
    const sidebarUserName = document.getElementById('sidebar-user-name');
    const sidebarUserRole = document.getElementById('sidebar-user-role');
    if (sidebarUserName) sidebarUserName.textContent = currentEmail.split('@')[0];
    if (sidebarUserRole) sidebarUserRole.textContent = roleText;
    if (dropdownAvatar) {
      dropdownAvatar.innerHTML = '<i data-lucide="shield-check" style="width: 20px; height: 20px; color: white;"></i>';
      dropdownAvatar.style.background = '#4f46e5';
    }

    if (currentAttendanceActivityId) {
      if (saveStatusText && attendanceSaveStatus) {
        attendanceSaveStatus.className = 'save-status-container saved';
        saveStatusText.textContent = 'All changes saved locally';
      }
    }
  } else {
    body.classList.add('view-only');
    if (adminOnlyMenu) adminOnlyMenu.classList.add('hidden');
    if (btnAuth) btnAuth.classList.remove('hidden'); // Show login button in menu
    const currentName = localStorage.getItem('current_username') || 'Guest User';
    const welcomeBanner = document.getElementById('welcome-banner-title');
    if (welcomeBanner) welcomeBanner.innerHTML = `Hello, ${currentName} ! 👋`;
    if (dropdownUserName) dropdownUserName.textContent = currentName;
    if (dropdownUserEmail) dropdownUserEmail.textContent = 'View-Only Mode';
    const sidebarUserName = document.getElementById('sidebar-user-name');
    const sidebarUserRole = document.getElementById('sidebar-user-role');
    if (sidebarUserName) sidebarUserName.textContent = currentName;
    if (sidebarUserRole) sidebarUserRole.textContent = 'View-Only Access';
    if (dropdownAvatar) {
      dropdownAvatar.innerHTML = '<i data-lucide="user" style="width: 20px; height: 20px; color: var(--text-dim);"></i>';
      dropdownAvatar.style.background = 'rgba(255, 255, 255, 0.1)';
    }

    if (currentAttendanceActivityId) {
      if (saveStatusText && attendanceSaveStatus) {
        attendanceSaveStatus.className = 'save-status-container';
        saveStatusText.textContent = 'View Only Mode';
      }
    }
  }

  // Update visibility of Add buttons for current active tab
  const activeTab = document.querySelector('.tab-btn.active');
  const btnAgendaAddAct = document.getElementById('btn-agenda-add-activity');
  if (btnAgendaAddAct) btnAgendaAddAct.classList.toggle('hidden', !isAdmin);

  if (activeTab) {
    const tabName = activeTab.id.replace('tab-', '');
    if (tabName === 'members') {
      btnAddMember.classList.toggle('hidden', !isAdmin);
    } else {
      btnAddMember.classList.add('hidden');
    }
  }

  renderFullAgendaList();
  renderLateAgendaList();
  renderAccomplishedAgendaList();

  // Toggle Show All / Show Less for full agenda
  const btnToggleFullAgenda = document.getElementById('btn-toggle-full-agenda');
  if (btnToggleFullAgenda) {
    btnToggleFullAgenda.addEventListener('click', () => {
      fullAgendaShowAll = !fullAgendaShowAll;
      renderFullAgendaList();
    });
  }
}

// Screen navigation helpers
function showWelcomeScreen() {
  document.getElementById('welcome-screen').classList.remove('hidden');
  document.querySelector('.app-container').classList.add('hidden');
}

function hideWelcomeScreen() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.querySelector('.app-container').classList.remove('hidden');
}

// Authentication button click
document.getElementById('btn-admin-auth').addEventListener('click', () => {
  showWelcomeScreen();
  document.getElementById('profile-dropdown-menu').classList.remove('active');
});

// Dropdown Logout Click
document.getElementById('btn-dropdown-logout').addEventListener('click', () => {
  isAdmin = false;
  localStorage.setItem('is_admin', 'false');
  updateRoleUI();
  showWelcomeScreen();
  document.getElementById('profile-dropdown-menu').classList.remove('active');
});

// Welcome screen Actions
document.getElementById('welcome-visitor-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const firstName = document.getElementById('welcome-visitor-firstname').value.trim();
  const lastName = document.getElementById('welcome-visitor-lastname').value.trim();
  const errorEl = document.getElementById('welcome-visitor-error');

  const allMembers = dbMembers.getAll();
  let matchedName = null;
  const isMember = allMembers.some(m => {
    if (!m.name) return false;
    const lowerName = m.name.toLowerCase();
    if (lowerName.includes(firstName.toLowerCase()) && lowerName.includes(lastName.toLowerCase())) {
      matchedName = m.name;
      return true;
    }
    return false;
  });

  if (!isMember) {
    if (errorEl) {
      errorEl.textContent = 'Invalid name. Must be a registered member.';
      errorEl.classList.remove('hidden');
    }
    return;
  }

  if (errorEl) errorEl.classList.add('hidden');
  isAdmin = false;
  localStorage.setItem('is_admin', 'false');
  localStorage.setItem('current_username', matchedName);
  document.getElementById('welcome-visitor-firstname').value = '';
  document.getElementById('welcome-visitor-lastname').value = '';
  updateRoleUI();
  hideWelcomeScreen();
  lucide.createIcons();
});

// Firebase Auth State Listener
// Firebase Auth State Listener
let currentUserRole = null;
let currentUserChapter = null;

firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    isAdmin = true;
    localStorage.setItem('is_admin', 'true');
    localStorage.setItem('current_username', user.email);

    if (db) {
      try {
        const doc = await db.collection('users').doc(user.email).get();
        if (doc.exists) {
          const data = doc.data();
          currentUserRole = data.role;
          currentUserChapter = data.chapter;
          
          if (currentUserRole === 'superadmin') {
            document.getElementById('sidebar-tab-accounts').style.display = 'flex';
          } else if (currentUserRole === 'chapterhead') {
            document.getElementById('sidebar-tab-accounts').style.display = 'none';
            if (typeof memberChapterFilter !== 'undefined') {
              memberChapterFilter.value = currentUserChapter;
              memberChapterFilter.disabled = true;
              currentMemberFilters.chapter = currentUserChapter;
            }
            if (typeof chapterFilter !== 'undefined') {
              chapterFilter.value = currentUserChapter;
              chapterFilter.disabled = true;
              currentActivityFilters.chapter = currentUserChapter;
            }
          }
        } else {
          currentUserRole = 'superadmin';
          document.getElementById('sidebar-tab-accounts').style.display = 'flex';
        }
      } catch (err) {
        console.error('Error fetching user role', err);
      }
    }

    updateRoleUI();
    hideWelcomeScreen();
    lucide.createIcons();
  } else {
    isAdmin = false;
    currentUserRole = null;
    currentUserChapter = null;
    localStorage.removeItem('is_admin');
    localStorage.removeItem('current_username');
  }
});

document.getElementById('welcome-admin-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('Admin login submitted', { email, password });
  if (!firebase) { console.error('Firebase SDK not loaded'); }
  const email = document.getElementById('welcome-admin-email').value;
  const password = document.getElementById('welcome-passcode-field').value;
  const welcomeError = document.getElementById('welcome-auth-error');
  const btn = document.getElementById('welcome-login-btn');
  const ogText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<i data-lucide="loader" class="rotating"></i> Logging in...';
  lucide.createIcons();

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    welcomeError.classList.add('hidden');
    document.getElementById('welcome-passcode-field').value = '';
    document.getElementById('welcome-admin-email').value = '';
  } catch (err) {
    welcomeError.textContent = err.message || 'Invalid email or password. Please try again.';
    welcomeError.classList.remove('hidden');
    const inputField = document.getElementById('welcome-passcode-field');
    inputField.style.borderColor = 'var(--danger)';
    inputField.style.boxShadow = '0 0 0 3px var(--danger-glow)';
    setTimeout(() => {
      inputField.style.borderColor = '';
      inputField.style.boxShadow = '';
    }, 1500);
  } finally {
    btn.disabled = false;
    btn.innerHTML = ogText;
    lucide.createIcons();
  }
});

const btnLogout = document.getElementById('btn-logout');
if (btnLogout) {
  btnLogout.addEventListener('click', async () => {
    await firebase.auth().signOut();
    location.reload();
  });
}

// Passcode Modal Triggers
document.getElementById('btn-change-passcode-trigger').addEventListener('click', () => {
  document.getElementById('profile-dropdown-menu').classList.remove('active');
  const changePasscodeModal = document.getElementById('change-passcode-modal');
  const changePasscodeForm = document.getElementById('change-passcode-form');
  const passcodeErrorMsg = document.getElementById('passcode-error-msg');
  changePasscodeForm.reset();
  passcodeErrorMsg.classList.add('hidden');
  changePasscodeModal.classList.remove('hidden');
});

// Account Recovery Options
document.getElementById('btn-recovery-options-trigger').addEventListener('click', () => {
  document.getElementById('profile-dropdown-menu').classList.remove('active');
  alert('Account Recovery Options feature will be available in a future update.');
});

document.getElementById('btn-close-passcode-modal').addEventListener('click', () => {
  document.getElementById('change-passcode-modal').classList.add('hidden');
});
document.getElementById('btn-cancel-passcode').addEventListener('click', () => {
  document.getElementById('change-passcode-modal').classList.add('hidden');
});

document.getElementById('change-passcode-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const currentPasscode = document.getElementById('field-current-passcode').value;
  const newPasscode = document.getElementById('field-new-passcode').value;
  const confirmPasscode = document.getElementById('field-confirm-passcode').value;
  const correctPasscode = localStorage.getItem('admin_passcode');
  const passcodeErrorMsg = document.getElementById('passcode-error-msg');

  if (currentPasscode !== correctPasscode) {
    passcodeErrorMsg.textContent = 'Current passcode is incorrect.';
    passcodeErrorMsg.classList.remove('hidden');
    return;
  }

  if (newPasscode.length < 4) {
    passcodeErrorMsg.textContent = 'New passcode must be at least 4 characters long.';
    passcodeErrorMsg.classList.remove('hidden');
    return;
  }

  if (newPasscode !== confirmPasscode) {
    passcodeErrorMsg.textContent = 'New passcode and confirmation do not match.';
    passcodeErrorMsg.classList.remove('hidden');
    return;
  }

  localStorage.setItem('admin_passcode', newPasscode);
  document.getElementById('change-passcode-modal').classList.add('hidden');
  alert('Admin passcode updated successfully!');
});

// ==========================================
// INITIAL RENDER
// ==========================================
updateRoleUI();
switchTab('dashboard');

// ==========================================
// TOP SCROLLBAR SYNC — Members Table
// ==========================================
(function initMembersTopScroll() {
  const topScroll = document.getElementById('members-top-scroll');
  const topScrollInner = document.getElementById('members-top-scroll-inner');
  const tableContainer = document.getElementById('members-table-container');
  const table = document.getElementById('members-table');
  if (!topScroll || !topScrollInner || !tableContainer || !table) return;

  function syncInnerWidth() {
    topScrollInner.style.width = table.scrollWidth + 'px';
  }

  // Keep inner width in sync
  syncInnerWidth();
  window.addEventListener('resize', syncInnerWidth);

  // Observe table width changes (columns added/removed)
  if (window.ResizeObserver) {
    new ResizeObserver(syncInnerWidth).observe(table);
  }

  // Sync scroll positions bidirectionally
  let syncing = false;
  topScroll.addEventListener('scroll', () => {
    if (syncing) return;
    syncing = true;
    tableContainer.scrollLeft = topScroll.scrollLeft;
    syncing = false;
  });
  tableContainer.addEventListener('scroll', () => {
    if (syncing) return;
    syncing = true;
    topScroll.scrollLeft = tableContainer.scrollLeft;
    syncing = false;
  });

  // Re-sync when Members tab is activated
  const membersTab = document.querySelector('[data-tab="members"]');
  if (membersTab) {
    membersTab.addEventListener('click', () => {
      setTimeout(syncInnerWidth, 50);
    });
  }
})();

// ==========================================
// SERVANT LEADERS CONTROLLER
// ==========================================

function renderLeaders() {
  const tbody = document.getElementById('leaders-table-body');
  const noLeadersMsg = document.getElementById('no-leaders-message');
  const totalLeadersStat = document.getElementById('stat-total-leaders');
  if (!tbody) return;

  const allMembers = currentUserRole === 'chapterhead' && currentUserChapter
    ? dbMembers.getAll().filter(m => m.chapter === currentUserChapter)
    : dbMembers.getAll();
  // Filter members whose role is not empty and not just 'Member'
  const leaders = allMembers.filter(m => m.role && m.role.trim() !== '' && m.role.toLowerCase() !== 'member');

  // Sort alphabetically by formatted name (Last Name first, case-insensitive)
  leaders.sort((a, b) => {
    const nameA = formatMemberName(a.name || '');
    const nameB = formatMemberName(b.name || '');
    return nameA.localeCompare(nameB, undefined, { sensitivity: 'base' });
  });

  if (totalLeadersStat) {
    totalLeadersStat.textContent = leaders.length;
  }

  if (leaders.length === 0) {
    tbody.innerHTML = '';
    noLeadersMsg.classList.remove('hidden');
  } else {
    noLeadersMsg.classList.add('hidden');
    tbody.innerHTML = leaders.map(m => `
      <tr class="leader-row">
        <td>
          <div class="name-block-wrapper">
            <div class="name-block-bar">
              <i data-lucide="user"></i>
            </div>
            <span class="name-text">${m.name}</span>
          </div>
        </td>
        <td>${m.chapter_area || '-'}</td>
        <td><span class="leader-role-badge">${m.role}</span></td>
        <td>${m.contact || '-'}</td>
        <td>${m.email || '-'}</td>
        <td class="admin-only text-right">
          <button class="btn-icon edit" onclick="editMember(${m.id})" title="Edit leader" style="background: transparent; color: #94a3b8; border: none; cursor: pointer; padding: 0.5rem; transition: color 0.2s;">
            <i data-lucide="edit-3"></i>
          </button>
        </td>
      </tr>
    `).join('');
  }
  lucide.createIcons();
}

const btnAddLeaderAction = document.getElementById('btn-add-leader');
if (btnAddLeaderAction) {
  btnAddLeaderAction.addEventListener('click', () => {
    if (typeof memberForm !== 'undefined') memberForm.reset();
    if (typeof fieldMemberId !== 'undefined') fieldMemberId.value = '';
    if (typeof memberModalTitle !== 'undefined') memberModalTitle.textContent = 'Add Servant Leader';
    if (typeof memberModal !== 'undefined') memberModal.classList.remove('hidden');
  });
}

// ==========================================
// ORG CHART CONTROLLER (Drag and Drop)
// ==========================================

function renderOrgChart() {
  // Include ALL members so leaders assigned via Leaders tab appear
  const members = dbMembers.getAll();

  const containerAreaYouth = document.getElementById('org-names-area-youth');
  const containerAreaLit = document.getElementById('org-names-area-lit');
  const containerMissionVol = document.getElementById('org-names-mission-volunteer');

  if (!containerAreaYouth) return;

  // Get the chapter field — stored as UPPERCASE (EAST, NORTH, WEST, SOUTH, CENTRAL, AREA)
  const getMemberChapter = (m) => (m.chapter_area || m.chapter || '').trim().toUpperCase();

  const renderList = (container, rolePattern, chapterMatch = null) => {
    if (!container) return;
    const matched = members.filter(m => {
      const roleNorm = (m.role || '').toLowerCase().trim();
      const roleMatches = roleNorm.includes(rolePattern.toLowerCase());
      if (!roleMatches) return false;
      if (!chapterMatch) return true;
      // Compare in uppercase since data is stored as EAST, NORTH, etc.
      return getMemberChapter(m) === chapterMatch.toUpperCase();
    });
    matched.sort((a, b) => {
      const nameA = formatMemberName(a.name || '');
      const nameB = formatMemberName(b.name || '');
      return nameA.localeCompare(nameB, undefined, { sensitivity: 'base' });
    });
    if (matched.length === 0) {
      container.innerHTML = '<p class="empty-names">Vacant</p>';
    } else {
      container.innerHTML = matched.map(m => `<p draggable="true" ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)" data-member-id="${m.id}" title="${m.name}">${m.name}</p>`).join('');
    }
  };

  // Area-level positions (no chapter filter needed)
  renderList(containerAreaYouth, 'area youth');
  renderList(containerAreaLit, 'area lit');
  // NOTE: Mission Volunteer is a free-text editable field — do NOT overwrite it here
  // Its value is saved to localStorage and restored below

  // Chapter-level positions — regions stored as UPPERCASE in chapter_area field
  const regions = ['EAST', 'NORTH', 'WEST', 'SOUTH', 'CENTRAL'];

  regions.forEach(region => {
    const rLower = region.toLowerCase();
    // Match 'Chapter Servant' or 'Chapter Head' or any role containing 'chapter'
    renderList(document.getElementById(`org-names-chapter-${rLower}`), 'chapter', region);
    renderList(document.getElementById(`org-names-unit-${rLower}`), 'unit', region);
    renderList(document.getElementById(`org-names-household-${rLower}`), 'household', region);

    // Members: base-level role or no role
    const containerMember = document.getElementById(`org-names-member-${rLower}`);
    if (containerMember) {
      const baseMembers = members.filter(m => {
        const roleNorm = (m.role || '').toLowerCase().trim();
        const isBaseRole = !m.role || roleNorm === 'member' || roleNorm === 'participant';
        return isBaseRole && getMemberChapter(m) === region;
      });
      containerMember.innerHTML = baseMembers.length === 0
        ? '<p class="empty-names">None</p>'
        : baseMembers.map(m => `<p draggable="true" ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)" data-member-id="${m.id}" title="${m.name}">${m.name}</p>`).join('');
    }
  });
}



// Drag and Drop Handlers
window.handleDragStart = function (e) {
  e.dataTransfer.setData('text/plain', e.target.getAttribute('data-member-id'));
  e.dataTransfer.effectAllowed = 'move';
  e.target.style.opacity = '0.5';
};

window.handleDragEnd = function (e) {
  e.target.style.opacity = '1';
};

window.handleDragOver = function (e) {
  e.preventDefault(); // Allows dropping
  e.dataTransfer.dropEffect = 'move';
  const card = e.currentTarget;
  card.classList.add('drag-over');
};

window.handleDragEnter = function (e) {
  e.preventDefault();
  const card = e.currentTarget;
  card.classList.add('drag-over');
};

window.handleDragLeave = function (e) {
  const card = e.currentTarget;
  card.classList.remove('drag-over');
};

window.handleDrop = function (e) {
  e.preventDefault();
  const card = e.currentTarget;
  card.classList.remove('drag-over');

  const memberId = e.dataTransfer.getData('text/plain');
  const newRole = card.getAttribute('data-role');
  const newChapter = card.getAttribute('data-chapter');

  if (memberId && newRole) {
    const member = dbMembers.getById(memberId);
    if (member) {
      let changed = false;
      if (member.role !== newRole) {
        member.role = newRole;
        changed = true;
      }
      if (newChapter && member.chapter_area !== newChapter) {
        member.chapter_area = newChapter;
        changed = true;
      }

      if (changed) {
        dbMembers.update(member.id, member);
        renderOrgChart(); // re-render the chart

        // Ensure members table reflects new chapter_area if it's active
        if (document.getElementById('tab-members').classList.contains('active')) {
          renderMembers();
        }
      }
    }
  }
};

// Custom Editable Titles
window.saveCustomTitle = function (id, text) {
  localStorage.setItem('title-' + id, text.trim());
};

const mvNameEl = document.getElementById('mv-custom-name');
if (mvNameEl) {
  const savedName = localStorage.getItem('title-mv-name');
  if (savedName && savedName.trim()) {
    mvNameEl.innerText = savedName;
  }
  // Restore after every renderOrgChart call (since it may re-run)
  const _origRenderOrgChart = renderOrgChart;
  window.renderOrgChart = function () {
    _origRenderOrgChart();
    const saved = localStorage.getItem('title-mv-name');
    if (saved && saved.trim()) {
      mvNameEl.innerText = saved;
    } else {
      mvNameEl.innerText = 'Vacant';
    }
  };

  // Make it clear the field is editable
  mvNameEl.setAttribute('placeholder', 'Click to enter name...');
  mvNameEl.addEventListener('focus', () => {
    if (mvNameEl.innerText.trim() === 'Vacant') mvNameEl.innerText = '';
    mvNameEl.style.borderBottom = '2px solid var(--primary)';
  });
  mvNameEl.addEventListener('blur', () => {
    const val = mvNameEl.innerText.trim();
    if (!val) mvNameEl.innerText = 'Vacant';
    localStorage.setItem('title-mv-name', mvNameEl.innerText.trim());
    mvNameEl.style.borderBottom = '1px dashed rgba(255,255,255,0.3)';
  });
}

// Initialize today's date in the header
function initHeaderDate() {
  const dateDisplay = document.getElementById('today-date-display');
  if (dateDisplay) {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = today.toLocaleDateString('en-US', options);
  }
}
initHeaderDate();

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  const profileMenu = document.getElementById('profile-dropdown-menu');
  const profileTrigger = document.getElementById('profile-trigger');
  if (profileMenu && profileTrigger && profileMenu.classList.contains('active') && !profileTrigger.contains(e.target) && !profileMenu.contains(e.target)) {
    profileMenu.classList.remove('active');
  }
});

// Sidebar Logic
function openSidebar() {
  const drawer = document.getElementById('sidebar-drawer');
  const themeDrawer = document.getElementById('theme-drawer');
  const overlay = document.getElementById('sidebar-overlay');
  if (themeDrawer) themeDrawer.classList.remove('active');
  if (drawer) drawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
}

function closeSidebar() {
  const drawer = document.getElementById('sidebar-drawer');
  const themeDrawer = document.getElementById('theme-drawer');
  const overlay = document.getElementById('sidebar-overlay');
  if (drawer) drawer.classList.remove('active');
  if (themeDrawer) themeDrawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

function toggleSubmenu(submenuId) {
  const submenu = document.getElementById(submenuId);
  if (submenu) {
    submenu.classList.toggle('hidden');

    const iconId = submenuId + '-icon';
    const icon = document.getElementById(iconId);
    if (icon) {
      if (submenu.classList.contains('hidden')) {
        icon.style.transform = 'rotate(0deg)';
      } else {
        icon.style.transform = 'rotate(180deg)';
      }
    }
  }
}

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('#main-menu-trigger');
  if (trigger) {
    openSidebar();
  }
});

const sidebarOverlay = document.getElementById('sidebar-overlay');
if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

// Theme Customization Manager
(function () {
  const themeDrawer = document.getElementById('theme-drawer');
  const themeOverlay = document.getElementById('sidebar-overlay'); // sharing the sidebar overlay
  const themeFloatingTrigger = document.getElementById('theme-floating-trigger');
  const btnCloseTheme = document.getElementById('btn-close-theme');

  const modeButtons = document.querySelectorAll('.theme-mode-btn');
  const colorButtons = document.querySelectorAll('.theme-color-btn');

  const radiusSlider = document.getElementById('theme-radius-slider');
  const radiusValueDisplay = document.getElementById('radius-value-display');

  const fontSlider = document.getElementById('theme-font-slider');
  const fontValueDisplay = document.getElementById('font-value-display');

  // Load preferences from localStorage
  let savedMode = localStorage.getItem('theme-mode') || 'auto';
  let savedColor = localStorage.getItem('theme-color') || 'indigo';
  let savedRadius = localStorage.getItem('theme-radius') || '4';
  let savedFontSize = localStorage.getItem('theme-font-size') || '0.8125';

  // Apply initial settings
  applyThemeMode(savedMode);
  applyThemeColor(savedColor);
  applyThemeRadius(savedRadius);
  applyThemeFontSize(savedFontSize);

  // Set up event listeners

  if (themeFloatingTrigger) {
    themeFloatingTrigger.addEventListener('click', openThemeDrawer);
  }

  if (btnCloseTheme) {
    btnCloseTheme.addEventListener('click', closeThemeDrawer);
  }

  // Mode selectors
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-mode');
      savedMode = mode;
      localStorage.setItem('theme-mode', mode);
      applyThemeMode(mode);
    });
  });

  // Color selectors
  colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.getAttribute('data-color');
      savedColor = color;
      localStorage.setItem('theme-color', color);
      applyThemeColor(color);
    });
  });

  // Border radius slider
  if (radiusSlider) {
    radiusSlider.value = savedRadius;
    if (radiusValueDisplay) radiusValueDisplay.textContent = savedRadius;
    radiusSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      savedRadius = val;
      if (radiusValueDisplay) radiusValueDisplay.textContent = val;
      localStorage.setItem('theme-radius', val);
      applyThemeRadius(val);
    });
  }

  // Font size slider
  if (fontSlider) {
    fontSlider.value = savedFontSize;
    if (fontValueDisplay) fontValueDisplay.textContent = savedFontSize + ' rem';
    fontSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      savedFontSize = val;
      if (fontValueDisplay) fontValueDisplay.textContent = val + ' rem';
      localStorage.setItem('theme-font-size', val);
      applyThemeFontSize(val);
    });
  }

  function openThemeDrawer() {
    closeSidebar(); // Ensure sidebar closes when theme drawer opens
    if (themeDrawer) themeDrawer.classList.add('active');
    if (themeOverlay) themeOverlay.classList.add('active');

    // Make sure Lucide icons inside theme drawer are generated
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function closeThemeDrawer() {
    if (themeDrawer) themeDrawer.classList.remove('active');
    // Only remove active from overlay if sidebar is also not active
    const sidebar = document.getElementById('sidebar-drawer');
    if (themeOverlay && (!sidebar || !sidebar.classList.contains('active'))) {
      themeOverlay.classList.remove('active');
    }
  }

  function applyThemeMode(mode) {
    document.documentElement.setAttribute('data-theme', mode);

    // Update active class on mode buttons
    modeButtons.forEach(btn => {
      if (btn.getAttribute('data-mode') === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function applyThemeColor(color) {
    document.documentElement.setAttribute('data-accent', color);

    // Update active class on color buttons
    colorButtons.forEach(btn => {
      if (btn.getAttribute('data-color') === color) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function applyThemeRadius(radius) {
    document.documentElement.style.setProperty('--radius-base', radius + 'px');
  }

  function applyThemeFontSize(fontSize) {
    document.documentElement.style.fontSize = fontSize + 'rem';
  }

  // Hook overlay click to also cover theme drawer close
  if (themeOverlay) {
    themeOverlay.addEventListener('click', closeThemeDrawer);
  }
})();

window.downloadActivityPDF = function (activityId, type) {
  const activity = dbActivities.getAll().find(a => a.id === activityId);
  if (!activity) return;

  if (!window.jspdf) {
    alert('PDF generator is still loading. Please try again in a moment.');
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.setTextColor(30, 64, 175);
  doc.text('MFC Youth Tarlac - ' + type, 14, 22);

  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Activity: ' + activity.activity, 14, 32);

  let yPos = 32;
  if (activity.title) {
    yPos += 6;
    doc.setFontSize(12);
    doc.text('Title: ' + activity.title, 14, yPos);
  }

  yPos += 8;
  doc.setFontSize(11);
  doc.text('Date: ' + (activity.date || '-') + ' | Held In: ' + (activity.held_in || '-') + ' | Venue: ' + (activity.venue || '-'), 14, yPos);

  yPos += 6;
  doc.text('Participants: ' + activity.participants + ' present', 14, yPos);

  // Generate Attendees Table
  const attendeesList = [];
  if (activity.attendee_ids && activity.attendee_ids.length > 0) {
    const allMembers = dbMembers.getAll();
    activity.attendee_ids.forEach(id => {
      const m = allMembers.find(member => String(member.id) === String(id));
      if (m) {
        attendeesList.push([m.name, m.chapter_area || '-', m.role || '-']);
      }
    });
  }

  yPos += 10;
  if (attendeesList.length > 0) {
    if (doc.autoTable) {
      doc.autoTable({
        startY: yPos,
        head: [['Member Name', 'Chapter / Area', 'Role']],
        body: attendeesList,
        theme: 'striped',
        headStyles: { fillColor: [15, 23, 42] },
        styles: { fontSize: 10 }
      });
    } else {
      doc.text('Attendees table could not be loaded.', 14, yPos);
    }
  } else {
    doc.text('No attendees recorded.', 14, yPos);
  }

  doc.save(activity.activity.replace(/\s+/g, '_') + '_' + type + '.pdf');
};

const btnRefreshHistory = document.getElementById('btn-refresh-history');
if (btnRefreshHistory) {
  btnRefreshHistory.addEventListener('click', () => {
    btnRefreshHistory.innerHTML = '<i data-lucide="refresh-cw" class="spin-animation"></i> REFRESH HISTORY';
    lucide.createIcons();
    setTimeout(() => {
      renderActivities();
      btnRefreshHistory.innerHTML = '<i data-lucide="refresh-cw"></i> REFRESH HISTORY';
      lucide.createIcons();
    }, 500);
  });
}

// ==========================================
// RESOURCES MODULE LOGIC
// ==========================================

const btnAddResource = document.getElementById('btn-add-resource');
const resourceModal = document.getElementById('resource-upload-modal');
const btnCloseResourceModal = document.getElementById('btn-close-resource-modal');
const btnCancelResource = document.getElementById('btn-cancel-resource');
const resourceForm = document.getElementById('resource-upload-form');
const progressText = document.getElementById('resource-upload-progress');

function openResourceModal() {
  if (!currentResourceCategory) return;
  resourceModal.classList.remove('hidden');
  resourceForm.reset();
  progressText.textContent = '';
  if (resourceFileName) {
    resourceFileName.textContent = '';
    resourceFileName.style.display = 'none';
  }
  if (resourceUploadBox) {
    resourceUploadBox.style.background = '#e5e7eb';
  }
}

function closeResourceModal() {
  resourceModal.classList.add('hidden');
  progressText.textContent = '';
}

if (btnAddResource) btnAddResource.addEventListener('click', openResourceModal);
if (btnCloseResourceModal) btnCloseResourceModal.addEventListener('click', closeResourceModal);
if (btnCancelResource) btnCancelResource.addEventListener('click', closeResourceModal);

const resourceFileInput = document.getElementById('field-resource-file');
const resourceFileName = document.getElementById('resource-file-name');
const resourceUploadBox = document.getElementById('resource-upload-box');

if (resourceFileInput) {
  resourceFileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      resourceFileName.textContent = e.target.files[0].name;
      resourceFileName.style.display = 'block';
      resourceUploadBox.style.background = '#d1d5db'; // slightly darker to show selection
    } else {
      resourceFileName.textContent = '';
      resourceFileName.style.display = 'none';
      resourceUploadBox.style.background = '#e5e7eb';
    }
  });
}

if (resourceForm) {
  resourceForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('field-resource-file');
    const titleInput = document.getElementById('field-resource-title');
    const file = fileInput.files[0];
    if (!file) return;

    let title = titleInput.value.trim();
    if (!title) title = file.name;

    const btnSubmit = document.getElementById('btn-submit-resource');
    btnSubmit.disabled = true;
    btnSubmit.textContent = 'Uploading...';
    progressText.textContent = 'Uploading to secure cloud storage...';
    progressText.style.color = 'var(--primary)';

    try {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(`resources/${currentResourceCategory}/${Date.now()}_${file.name}`);
      const uploadTask = await fileRef.put(file);
      const downloadURL = await uploadTask.ref.getDownloadURL();

      let iconType = 'file';
      if (file.type.includes('pdf')) iconType = 'file-text';
      if (file.type.includes('image')) iconType = 'image';
      if (file.type.includes('presentation') || file.name.endsWith('.pptx')) iconType = 'file-presentation';
      if (file.type.includes('word')) iconType = 'file-text';

      dbResources.add({
        title: title,
        filename: file.name,
        type: file.type,
        icon: iconType,
        url: downloadURL,
        category: currentResourceCategory
      });

      closeResourceModal();
      renderResources(currentResourceCategory);
    } catch (error) {
      console.error('Upload failed:', error);
      progressText.textContent = 'Upload failed. Please check your connection and try again.';
      progressText.style.color = 'red';
    } finally {
      btnSubmit.disabled = false;
      btnSubmit.textContent = 'Upload File';
    }
  });
}

function renderResources(category) {
  const contentArea = document.getElementById('resources-content-area');
  if (!contentArea) return;

  if (!category) {
    contentArea.innerHTML = `
      <i data-lucide="folder-open" style="width: 48px; height: 48px; opacity: 0.5; margin-bottom: 1rem;"></i>
      <h3>Select a Resource Category</h3>
      <p>Choose a category from the sidebar menu.</p>
    `;
    lucide.createIcons();
    return;
  }

  let files = dbResources.getAll().filter(r => r.category === category);
  
  // Sort alphabetically by title
  files.sort((a, b) => a.title.localeCompare(b.title));

  if (files.length === 0) {
    if (category === 'songboard' && dbResources.getAll().filter(r => r.category === 'songboard').length === 0) {
       const songboardFile = {
         title: 'MFC Youth Songboard',
         filename: 'MFC Youth Songboard.pptx',
         icon: 'file-presentation',
         url: 'resources/MFC Youth Songboard.pptx',
         category: 'songboard'
       };
       dbResources.add(songboardFile);
       files.push(songboardFile);
    } else if (category === 'youthcamp' && dbResources.getAll().filter(r => r.category === 'youthcamp').length === 0) {
      const youthCampFiles = [
        { title: 'SESSION 1 - God\'s Love and His Plans for Us', filename: 'SESSION 1 - God_s Love and his plans for us.pptx', icon: 'file-presentation', url: 'resources/youthcamp/SESSION 1 - God_s Love and his plans for us.pptx', category: 'youthcamp' },
        { title: 'Session 2 - Who is Jesus Christ', filename: 'Session 2 - Who is Jesus Christ.pptx', icon: 'file-presentation', url: 'resources/youthcamp/Session 2 - Who is Jesus Christ.pptx', category: 'youthcamp' },
        { title: 'Session 3 - Repentance and Faith', filename: 'Session 3 - Repentance and Faith.pptx', icon: 'file-presentation', url: 'resources/youthcamp/Session 3 - Repentance and Faith.pptx', category: 'youthcamp' },
        { title: 'Session 4 - Receiving God\'s Gift: The Power of the Holy Spirit', filename: 'Session 4 - Receiving God_s Gift_ The Power of the Holy Spirit.pptx', icon: 'file-presentation', url: 'resources/youthcamp/Session 4 - Receiving God_s Gift_ The Power of the Holy Spirit.pptx', category: 'youthcamp' },
        { title: 'Session 5 - Growing in the Spirit', filename: 'Session 5 Growing in the Spirit.pptx', icon: 'file-presentation', url: 'resources/youthcamp/Session 5 Growing in the Spirit.pptx', category: 'youthcamp' },
        { title: 'MFC Youth Youth Camp Manual 2020', filename: 'MFC Youth Youth Camp Manual 2020.pdf', icon: 'file-text', url: 'resources/youthcamp/MFC Youth Youth Camp Manual 2020.pdf', category: 'youthcamp' }
      ];
      youthCampFiles.forEach(f => {
        dbResources.add(f);
        files.push(f); // also render them immediately
      });
      // Re-sort just in case
      files.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      contentArea.innerHTML = `
        <i data-lucide="folder-open" style="width: 48px; height: 48px; opacity: 0.5; margin-bottom: 1rem;"></i>
        <h3>No Files Found</h3>
        <p>There are currently no files uploaded for this category.</p>
      `;
      lucide.createIcons();
      return;
    }
  }

  contentArea.innerHTML = files.map(file => {
    let displayTitle = file.title;
    let displayFilename = file.filename;
    
    // Fix upper and lower case issues
    displayTitle = displayTitle.replace(/SESSION/gi, 'Session');
    displayTitle = displayTitle.replace(/Session 5 Growing/gi, 'Session 5 - Growing');
    
    displayFilename = displayFilename.replace(/SESSION/gi, 'Session');
    displayFilename = displayFilename.replace(/God_s/gi, "God's");
    displayFilename = displayFilename.replace(/Gift_/g, 'Gift:');
    
    return `
    <div style="background: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 12px; width: 100%; max-width: 500px; display: flex; align-items: center; justify-content: space-between; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 1rem;">
      <div style="display: flex; align-items: center; gap: 1rem; text-align: left; overflow: hidden;">
        <div style="background: var(--primary); width: 48px; height: 48px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <i data-lucide="${file.icon || 'file'}" style="color: white;"></i>
        </div>
        <div style="overflow: hidden;">
          <h4 style="margin: 0; font-size: 1.1rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${displayTitle}">${displayTitle}</h4>
          <span style="font-size: 0.85rem; color: var(--text-dim);">${displayFilename}</span>
        </div>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <a href="${file.url}" target="_blank" download class="btn btn-primary" style="padding: 0.5rem 1rem;">
          <i data-lucide="download"></i> <span class="hide-mobile">Download</span>
        </a>
        ${isAdmin && file.id ? `<button class="btn btn-outline" style="padding: 0.5rem; border-color: rgba(255,0,0,0.3); color: #ff6b6b;" onclick="deleteResource(${file.id})" title="Delete"><i data-lucide="trash-2"></i></button>` : ''}
      </div>
    </div>
  `}).join('');
  
  lucide.createIcons();
}

window.deleteResource = function(id) {
  if (confirm('Are you sure you want to delete this resource?')) {
    dbResources.delete(id);
    renderResources(currentResourceCategory);
  }
};

// ==========================================
// ACCOUNT RECOVERY & EMAILJS LOGIC
// ==========================================

let emailRecoverySettings = {};

if (typeof db !== 'undefined' && db) {
  db.collection('settings').doc('recovery').onSnapshot(doc => {
    if (doc.exists) {
      emailRecoverySettings = doc.data();
    }
  });
}

// Settings Modal Logic
const recoveryModal = document.getElementById('recovery-options-modal');
const btnRecoveryTrigger = document.getElementById('btn-recovery-options-trigger');
const btnCloseRecovery = document.getElementById('btn-close-recovery-modal');
const btnCancelRecovery = document.getElementById('btn-cancel-recovery-options');
const recoveryForm = document.getElementById('recovery-options-form');

if (btnRecoveryTrigger) {
  btnRecoveryTrigger.addEventListener('click', () => {
    document.getElementById('field-recovery-email').value = emailRecoverySettings.email || '';
    document.getElementById('field-emailjs-public-key').value = emailRecoverySettings.publicKey || '';
    document.getElementById('field-emailjs-service-id').value = emailRecoverySettings.serviceId || '';
    document.getElementById('field-emailjs-template-id').value = emailRecoverySettings.templateId || '';
    recoveryModal.classList.remove('hidden');
    // Hide dropdown
    const dropdown = document.getElementById('admin-profile-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
  });
}

const hideRecoveryModal = () => {
  if (recoveryModal) recoveryModal.classList.add('hidden');
};
if (btnCloseRecovery) btnCloseRecovery.addEventListener('click', hideRecoveryModal);
if (btnCancelRecovery) btnCancelRecovery.addEventListener('click', hideRecoveryModal);

if (recoveryForm) {
  recoveryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const settings = {
      email: document.getElementById('field-recovery-email').value.trim(),
      publicKey: document.getElementById('field-emailjs-public-key').value.trim(),
      serviceId: document.getElementById('field-emailjs-service-id').value.trim(),
      templateId: document.getElementById('field-emailjs-template-id').value.trim()
    };
    
    if (typeof db !== 'undefined' && db) {
      db.collection('settings').doc('recovery').set(settings)
        .then(() => {
          const msg = document.getElementById('recovery-options-msg');
          msg.textContent = 'Settings saved securely!';
          msg.style.color = 'var(--success)';
          msg.classList.remove('hidden');
          setTimeout(() => {
            msg.classList.add('hidden');
            hideRecoveryModal();
          }, 2000);
        })
        .catch(err => alert('Failed to save settings: ' + err));
    }
  });
}

// Forgot Passcode Modal Logic
const forgotModal = document.getElementById('forgot-passcode-modal');
const btnForgotTrigger = document.getElementById('btn-forgot-passcode-trigger');
const btnCloseForgot = document.getElementById('btn-close-forgot-modal');
const btnCancelForgot = document.getElementById('btn-cancel-forgot-passcode');
const forgotForm = document.getElementById('forgot-passcode-form');
const forgotMsg = document.getElementById('forgot-passcode-msg');

if (btnForgotTrigger) {
  btnForgotTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    forgotModal.classList.remove('hidden');
    if (forgotMsg) forgotMsg.classList.add('hidden');
    document.getElementById('field-verify-recovery-email').value = '';
  });
}

const hideForgotModal = () => {
  if (forgotModal) forgotModal.classList.add('hidden');
};
if (btnCloseForgot) btnCloseForgot.addEventListener('click', hideForgotModal);
if (btnCancelForgot) btnCancelForgot.addEventListener('click', hideForgotModal);

if (forgotForm) {
  forgotForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputEmail = document.getElementById('field-verify-recovery-email').value.trim();
    const btnSubmit = document.getElementById('btn-submit-forgot-passcode');
    
    if (!emailRecoverySettings.email) {
      forgotMsg.textContent = 'Account recovery has not been configured by the admin yet.';
      forgotMsg.style.color = 'var(--danger)';
      forgotMsg.classList.remove('hidden');
      return;
    }
    
    if (inputEmail.toLowerCase() !== emailRecoverySettings.email.toLowerCase()) {
      forgotMsg.textContent = 'This email does not match our records.';
      forgotMsg.style.color = 'var(--danger)';
      forgotMsg.classList.remove('hidden');
      return;
    }
    
    // Attempt sending email via EmailJS
    btnSubmit.textContent = 'Sending...';
    btnSubmit.disabled = true;
    
    const passcode = localStorage.getItem('admin_passcode') || 'mfcyouthtarlac';
    
    try {
      emailjs.init(emailRecoverySettings.publicKey);
      
      emailjs.send(emailRecoverySettings.serviceId, emailRecoverySettings.templateId, {
        passcode: passcode,
        reply_to: emailRecoverySettings.email
      })
      .then(() => {
        forgotMsg.textContent = 'Passcode sent successfully! Check your inbox.';
        forgotMsg.style.color = 'var(--success)';
        forgotMsg.classList.remove('hidden');
        setTimeout(() => {
          hideForgotModal();
        }, 3000);
      })
      .catch((err) => {
        forgotMsg.textContent = 'Failed to send email. Ensure your EmailJS settings are correct.';
        forgotMsg.style.color = 'var(--danger)';
        forgotMsg.classList.remove('hidden');
        console.error(err);
      })
      .finally(() => {
        btnSubmit.textContent = 'Send Recovery Email';
        btnSubmit.disabled = false;
      });
    } catch(err) {
      forgotMsg.textContent = 'EmailJS SDK not loaded or incorrect setup.';
      forgotMsg.style.color = 'var(--danger)';
      forgotMsg.classList.remove('hidden');
      btnSubmit.textContent = 'Send Recovery Email';
      btnSubmit.disabled = false;
    }
  });
}
// ==========================================
// BULK IMPORT & EXPORT (CSV/JSON)
// ==========================================

function downloadCSV(data, filename) {
  if (!data || !data.length) return alert('No data to export!');
  const replacer = (key, value) => value === null ? '' : value;
  const header = Object.keys(data[0]);
  const csv = [
    header.join(','), // header row first
    ...data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
  ].join('\r\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('hidden', '');
  a.setAttribute('href', url);
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Members Export
const btnExportMemberCsv = document.getElementById('btn-export-member-csv');
if (btnExportMemberCsv) {
  btnExportMemberCsv.addEventListener('click', () => {
    downloadCSV(dbMembers.members, 'members_export.csv');
  });
}

// Activities Export
const btnExportActivityCsv = document.getElementById('btn-export-csv');
if (btnExportActivityCsv) {
  btnExportActivityCsv.addEventListener('click', () => {
    downloadCSV(dbActivities.activities, 'activities_export.csv');
  });
}

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('hidden', '');
  a.setAttribute('href', url);
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Members JSON Backup
const btnExportMemberJson = document.getElementById('btn-export-member-json');
if (btnExportMemberJson) {
  btnExportMemberJson.addEventListener('click', () => {
    downloadJSON(dbMembers.members, 'members_backup.json');
  });
}

// Activities JSON Backup
const btnExportActivityJson = document.getElementById('btn-export-json');
if (btnExportActivityJson) {
  btnExportActivityJson.addEventListener('click', () => {
    downloadJSON(dbActivities.activities, 'activities_backup.json');
  });
}

// Import JSON Logic for Members
const btnImportMemberTrigger = document.getElementById('btn-import-member-trigger');
const fileImportMemberInput = document.getElementById('file-import-member-input');

if (btnImportMemberTrigger && fileImportMemberInput) {
  btnImportMemberTrigger.addEventListener('click', () => fileImportMemberInput.click());
  fileImportMemberInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (Array.isArray(importedData)) {
          if (confirm(`Are you sure you want to import ${importedData.length} members? This will add to your existing database.`)) {
            importedData.forEach(member => {
              // Basic check to prevent exact name duplicates
              if (!dbMembers.members.some(m => m.name === member.name)) {
                member.id = Date.now() + Math.floor(Math.random() * 1000);
                dbMembers.members.push(member);
                if (db) db.collection('members').add(member);
              }
            });
            dbMembers.saveToStorage();
            renderMembers();
            alert('Import successful!');
          }
        } else {
          alert('Invalid JSON format. Expected an array of objects.');
        }
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
    fileImportMemberInput.value = ''; // Reset
  });
}

// Import JSON Logic for Activities
const btnImportActivityTrigger = document.getElementById('btn-import-trigger');
const fileImportActivityInput = document.getElementById('file-import-input');

if (btnImportActivityTrigger && fileImportActivityInput) {
  btnImportActivityTrigger.addEventListener('click', () => fileImportActivityInput.click());
  fileImportActivityInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (Array.isArray(importedData)) {
          if (confirm(`Are you sure you want to import ${importedData.length} activities?`)) {
            importedData.forEach(act => {
              if (!dbActivities.activities.some(a => a.activityName === act.activityName && a.date === act.date)) {
                act.id = Date.now() + Math.floor(Math.random() * 1000);
                dbActivities.activities.push(act);
                if (db) db.collection('activities').add(act);
              }
            });
            dbActivities.saveToStorage();
            renderActivities();
            alert('Import successful!');
          }
        } else {
          alert('Invalid JSON format. Expected an array of objects.');
        }
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
    fileImportActivityInput.value = ''; // Reset
  });
}

// ==========================================
// THEME (DARK/LIGHT MODE) LOGIC
// ==========================================

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeToggleIcon = document.getElementById('theme-toggle-icon');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('app-theme', theme);
  
  if (themeToggleIcon) {
    if (theme === 'dark') {
      themeToggleIcon.setAttribute('data-lucide', 'sun');
    } else {
      themeToggleIcon.setAttribute('data-lucide', 'moon');
    }
    if (window.lucide) {
      lucide.createIcons();
    }
  }
}

// Initialize theme on load
const savedTheme = localStorage.getItem('app-theme') || 'dark'; // Default to dark since CSS default is dark
applyTheme(savedTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });
}

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
