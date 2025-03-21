let plotNumbers = [];
let namesArray = [];
let floorsArray = [];
let shareTypeMembership = [];
let contactNumbers = Array(136).fill("blank");

const data = [
  { id: "1 - A - 1", name: "MRS. UZMA MUZAFFAR S/O MUZAFFAR KHAN", status: "G", reference: "R - 517" },
  { id: "1 - A - 2", name: "MR. M. HARRIS S/O SAJEEL AHMED", status: "G", reference: "R - 512" },
  { id: "1 - A - 3", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 4", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 5", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 6", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 7", name: "MRS. SALMA JAMIL S/O JAMIL AHMED", status: "G + 1", reference: "R - 351" },
  { id: "1 - A - 8", name: "MR. M. SHOAIB KHAN S/O ZAFAR UL HASAN KHAN", status: "G", reference: "R - 341" },
  { id: "1 - A - 9", name: "MR. M. AMIR ANSARI S/O M. IBRAHIM ANSARI", status: "U C", reference: "R - 405" },
  { id: "1 - A - 9 A", name: "MR. M. SULTAN S/O M. IDREES", status: "G + 1", reference: "R - 1062" },
  { id: "1 - A - 9 B", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 9 C", name: "MR. SHAMIM UL HAQ S/O EHTESHAM UL HAQ", status: "G+1UC", reference: "R - 1058" },
  { id: "1 - A - 9 D", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 9 E", name: "E MRS. AISHA TAHIR W/O TAHIR IMRAN", status: "G+1UC", reference: "R - 990" },
  { id: "1 - A - 10", name: "MR. BASHARAT KHAN S/O BASHIR AHMED", status: "G + 1", reference: "R - 516" },
  { id: "1 - A - 11", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 12", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 13", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 14", name: "MRS. REHMANI BEGUM W/O SHAKEEL AHMED", status: "G", reference: "R - 291" },
  { id: "1 - A - 15", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 16", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 17", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 18", name: "MR. M. ZUBAIR S/O KHALIL UR REHMAN", status: "G", reference: "R - 403" },
  { id: "1 - A - 19", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 20", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 21", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 22", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 23", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 24", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 25", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 26", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 27", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 28", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 29", name: "MR. ABDUL KHALID S/O ABDUL WAJID", status: "G+1UC", reference: "R - 123" },
  { id: "1 - A - 30", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 31", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 32", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 33", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 34", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 35", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 36", name: "MR. SAFAR MUHAMMAD S/O NOOR MUHAMMAD", status: "G + 1",reference: "" },
  { id: "1 - A - 37", name: "MR. SALAHUDDIN S/O M. MUNIR UDDIN", status: "G + 1", reference: "R - 536" },
  { id: "1 - A - 38", name: "MRS. JEHNAZ SULTANA W/O", status: "G + 1", reference: "R - 535" },
  { id: "1 - A - 39", name: "MR. TALHA ISLAM S/O ISLAM UL HAQ", status: "G + 1", reference: "R - 549" },
  { id: "1 - A - 40", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 41", name: "MRS. SHAMEEN ASIM W/O ASIM FAROOQI", status: "G", reference: "R - 180" },
  { id: "1 - A - 42", name: "MR. ABDULLAH NISAR S/O NISAR AHMED", status: "G", reference: "R - 260" },
  { id: "1 - A - 43", name: "MR. ZIA UDDIN SIDDIQI S/O MAJEED UDDIN SIDDIQI", status: "G + 1", reference: "R - 73" },
  { id: "1 - A - 44", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 45", name: "MR. ABDUL RAB S/O MUHAMMAD", status: "G + 1", reference: "R - 75" },
  { id: "1 - A - 46", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 47", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 48", name: "MR. NASEER AHMED S/O GUL MOHAMMAD", status: "G + 1", reference: "R - 352" },
  { id: "1 - A - 49", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 50", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 51", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 52", name: "MRS. NAVEEN AFSAR W/O AFSAR ALAM SIDDIQI", status: "G", reference: "R - 11" },
  { id: "1 - A - 53", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 54", name: "MR. ABDUL MAJID S/O AZIZ KHAN", status: "G + 1", reference: "R - 430" },
  { id: "1 - A - 55", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 56", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 57", name: "MR. KHALID SAIFULLAH S/O AHMAD ALI BAIG", status: "G + 1", reference: "R - 60" },
  { id: "1 - A - 58", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 59", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 60", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 61", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 62", name: "MR. HABIB ANJUM S/O ANJUM RAFIQ", status: "G + 1", reference: "R - 468" },
  { id: "1 - A - 63", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 64", name: "MRS. SEEMA KHATOON W/O M. MANSOOR", status: "G + 1", reference: "R - 364" },
  { id: "1 - A - 65", name: "MR. M. ADEEL S/O IFTIKHAR UDDIN", status: "G + 1", reference: "R - 58" },
  { id: "1 - A - 66", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 67", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 68", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 69", name: "MRS. SHAHZADI PUKHRAJ W/O", status: "G + 1", reference: "R - 529" },
  { id: "1 - A - 70", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 71", name: "MRS. AMBER DANISH W/O DANISH RAZA", status: "G + 1", reference: "R - 310" },
  { id: "1 - A - 72", name: "MR. M. ZAKIR S/O M. FAROOQ", status: "G + 1", reference: "R - 168" },
  { id: "1 - A - 73", name: "MRS.GHAZALA NADEEM W/O M. NADEEM HASHMI", status: "U C", reference: "R - 153" },
  { id: "1 - A - 74", name: "MRS. KULSOOM W/O M. SADDIQ KARAR", status: "G + 1", reference: "R - 77" },
  { id: "1 - A - 75", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 76", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 77", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 78", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 79", name: "MRS. NUSRAT ARA W/O M. SHAFIQ", status: "G + 1", reference: "R - 431" },
  { id: "1 - A - 80", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 81", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 82", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 83", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 84", name: "MR. ASHFAQ AHMED S/O JUMMA KHAN", status: "G", reference: "R - 57" },
  { id: "1 - A - 85", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 86", name: "MR. FAZLE MAULA S/O FAZAL MOHAMMAD", status: "G + 1", reference: "R - 466" },
  { id: "1 - A - 87", name: "MR. ZULFIQAR ALI S/O MEHRAB BHUTTO", status: "G + 1", reference: "R - 28" },
  { id: "1 - A - 88", name: "MRS. FOUZIA W/O M. ZUBAIR MAIRAJ", status: "G + 1", reference: "R - 527" },
  { id: "1 - A - 89", name: "MR. M. ANEES S/O M. RAFIQ", status: "G + 1", reference: "U C R - 332" },
  { id: "1 - A - 90", name: "MR. ZAKA UDDIN S/O JAWAID TARIQ", status: "G + 1", reference: "R - 334" },
  { id: "1 - A - 91", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 92", name: "MR. M. ASIM S/O HAMEED ULLAH", status: "G + 1", reference: "R - 397" },
  { id: "1 - A - 93", name: "MRS. TAHIRA KHATOON W/O ALI AKHTER", status: "G", reference: "R -537" },
  { id: "1 - A - 94", name: "MRS. HUMERA SHIRAZI W/O SAEED UR REHMAN", status: "G", reference: "R - 520" },
  { id: "1 - A - 95", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 96", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 97", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 98", name: "MR. S. MASOOD HASAN ZAIDI S/O LAIQ AHMED ZAIDI", status: "G", reference: "R - 503" },
  { id: "1 - A - 99", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 100", name: "MRS. SABIRA BEGUM W/O M. ASHRAF", status: "G", reference: "R - 297" },
  { id: "1 - A - 101", name: "MRS. SAIMA ADNAN W/O ADNAN USMANI", status: "G + 1", reference: "R - 45" },
  { id: "1 - A - 102", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 103", name: "MR. M. AMIR S/O M. ARIF", status: "G + 1", reference: "R - 363" },
  { id: "1 - A - 104", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 105", name: "MR. SULEMAN S/O ABDUL KARIM", status: "G + 1", reference: "R - 318" },
  { id: "1 - A - 106", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 107", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 108", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 109", name: "MR. YAR MOHAMMAD KHAN S/O PIRA KHAN", status: "G + 1", reference: "R - 40" },
  { id: "1 - A - 110", name: "MR. M. IMRAN S/O ABDUL SALAM", status: "G + 2", reference: "R - 274" },
  { id: "1 - A - 111", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 112", name: "MR. M. ALTAF QADIR S/O", status: "G + 1", reference: "R - 501" },
  { id: "1 - A - 113", name: "MRS. FARIHA MAHMOOD W/O MAHMOOD UL HAQ SIDDIQI", status: "G + 1", reference: "R - 150" },
  { id: "1 - A - 114", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 115", name: "MR. MAHMOOD S/O ABDUL MAJEED", status: "G + 1", reference: "R - 238" },
  { id: "1 - A - 116", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 117", name: " MRS. SHOUMAILA BIBI D/O MOHAMMAD SHER KHAN", status: "G + 1", reference: "R - 235" },
  { id: "1 - A - 118", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 119", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 120", name: "MR. M. TARIQ BAWANI S/O M. HANIF BAWANI", status: "G + 1", reference: "R - 234" },
  { id: "1 - A - 121", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 122", name: "MR. ABDUL FAREED SIDDIQI S/O ABDUL AZIZ", status: "G + 1", reference: "R - 239" },
  { id: "1 - A - 123", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 124", name: "MR. M. SALEEM S/O HAROON AHMED", status: "G + 2", reference: "R - 225" },
  { id: "1 - A - 125", name: "MR. REHAN UMER S/O M. IDREES", status: "G + 1", reference: "R - 71" },
  { id: "1 - A - 126", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 127", name: "MR. M. ASLAM S/O M. A. RAZZAK", status: "G + 2", reference: "R - 398" },
  { id: "1 - A - 128", name: " MR. WAQAR AHMED QURESHI S/O M. ANSAR", status: "G + 2", reference: "R - 416" },
  { id: "1 - A - 129", name: " MR. RAHEEL AHMED QURESHI S/O M. ANSAR", status: "G + 1", reference: "R - 386" },
  { id: "1 - A - 130", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 131", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 132", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 133", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 134", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 135", name: "", status: "Plot",reference: "" },
  { id: "1 - A - 136", name: "", status: "Plot",reference: "" },
  
  
  ]

data.forEach((e)=>{
  plotNumbers.push(e.id);
  namesArray.push(e.name);
  floorsArray.push(e.status);
  shareTypeMembership.push(e.reference);
})
console.log(plotNumbers);
console.log(namesArray);
console.log(floorsArray);
console.log(shareTypeMembership);

const dddata = [
    { id: "1 - A - 1", name: "MRS. UZMA MUZAFFAR S/O MUZAFFAR KHAN", status: "G", reference: "R - 517" },
    { id: "1 - A - 2", name: "MR. M. HARRIS S/O SAJEEL AHMED", status: "G", reference: "R - 512" },
    { id: "1 - A - 3", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 4", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 5", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 6", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 7", name: "MRS. SALMA JAMIL S/O JAMIL AHMED", status: "G + 1", reference: "R - 351" },
    { id: "1 - A - 8", name: "MR. M. SHOAIB KHAN S/O ZAFAR UL HASAN KHAN", status: "G", reference: "R - 341" },
    { id: "1 - A - 9", name: "MR. M. AMIR ANSARI S/O M. IBRAHIM ANSARI", status: "U C", reference: "R - 405" },
    { id: "1 - A - 9 A", name: "MR. M. SULTAN S/O M. IDREES", status: "G + 1", reference: "R - 1062" },
    { id: "1 - A - 9 B", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 9 C", name: "MR. SHAMIM UL HAQ S/O EHTESHAM UL HAQ", status: "G+1UC", reference: "R - 1058" },
    { id: "1 - A - 9 D", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 9 E", name: "E MRS. AISHA TAHIR W/O TAHIR IMRAN", status: "G+1UC", reference: "R - 990" },
    { id: "1 - A - 10", name: "MR. BASHARAT KHAN S/O BASHIR AHMED", status: "G + 1", reference: "R - 516" },
    { id: "1 - A - 11", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 12", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 13", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 14", name: "MRS. REHMANI BEGUM W/O SHAKEEL AHMED", status: "G", reference: "R - 291" },
    { id: "1 - A - 15", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 16", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 17", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 18", name: "MR. M. ZUBAIR S/O KHALIL UR REHMAN", status: "G", reference: "R - 403" },
    { id: "1 - A - 19", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 20", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 21", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 22", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 23", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 24", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 25", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 26", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 27", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 28", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 29", name: "MR. ABDUL KHALID S/O ABDUL WAJID", status: "G+1UC", reference: "R - 123" },
    { id: "1 - A - 30", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 31", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 32", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 33", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 34", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 35", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 36", name: "MR. SAFAR MUHAMMAD S/O NOOR MUHAMMAD", status: "G + 1",reference: "" },
    { id: "1 - A - 37", name: "MR. SALAHUDDIN S/O M. MUNIR UDDIN", status: "G + 1", reference: "R - 536" },
    { id: "1 - A - 38", name: "MRS. JEHNAZ SULTANA W/O", status: "G + 1", reference: "R - 535" },
    { id: "1 - A - 39", name: "MR. TALHA ISLAM S/O ISLAM UL HAQ", status: "G + 1", reference: "R - 549" },
    { id: "1 - A - 40", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 41", name: "MRS. SHAMEEN ASIM W/O ASIM FAROOQI", status: "G", reference: "R - 180" },
    { id: "1 - A - 42", name: "MR. ABDULLAH NISAR S/O NISAR AHMED", status: "G", reference: "R - 260" },
    { id: "1 - A - 43", name: "MR. ZIA UDDIN SIDDIQI S/O MAJEED UDDIN SIDDIQI", status: "G + 1", reference: "R - 73" },
    { id: "1 - A - 44", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 45", name: "MR. ABDUL RAB S/O MUHAMMAD", status: "G + 1", reference: "R - 75" },
    { id: "1 - A - 46", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 47", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 48", name: "MR. NASEER AHMED S/O GUL MOHAMMAD", status: "G + 1", reference: "R - 352" },
    { id: "1 - A - 49", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 50", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 51", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 52", name: "MRS. NAVEEN AFSAR W/O AFSAR ALAM SIDDIQI", status: "G", reference: "R - 11" },
    { id: "1 - A - 53", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 54", name: "MR. ABDUL MAJID S/O AZIZ KHAN", status: "G + 1", reference: "R - 430" },
    { id: "1 - A - 55", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 56", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 57", name: "MR. KHALID SAIFULLAH S/O AHMAD ALI BAIG", status: "G + 1", reference: "R - 60" },
    { id: "1 - A - 58", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 59", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 60", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 61", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 62", name: "MR. HABIB ANJUM S/O ANJUM RAFIQ", status: "G + 1", reference: "R - 468" },
    { id: "1 - A - 63", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 64", name: "MRS. SEEMA KHATOON W/O M. MANSOOR", status: "G + 1", reference: "R - 364" },
    { id: "1 - A - 65", name: "MR. M. ADEEL S/O IFTIKHAR UDDIN", status: "G + 1", reference: "R - 58" },
    { id: "1 - A - 66", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 67", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 68", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 69", name: "MRS. SHAHZADI PUKHRAJ W/O", status: "G + 1", reference: "R - 529" },
    { id: "1 - A - 70", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 71", name: "MRS. AMBER DANISH W/O DANISH RAZA", status: "G + 1", reference: "R - 310" },
    { id: "1 - A - 72", name: "MR. M. ZAKIR S/O M. FAROOQ", status: "G + 1", reference: "R - 168" },
    { id: "1 - A - 73", name: "MRS.GHAZALA NADEEM W/O M. NADEEM HASHMI", status: "U C", reference: "R - 153" },
    { id: "1 - A - 74", name: "MRS. KULSOOM W/O M. SADDIQ KARAR", status: "G + 1", reference: "R - 77" },
    { id: "1 - A - 75", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 76", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 77", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 78", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 79", name: "MRS. NUSRAT ARA W/O M. SHAFIQ", status: "G + 1", reference: "R - 431" },
    { id: "1 - A - 80", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 81", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 82", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 83", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 84", name: "MR. ASHFAQ AHMED S/O JUMMA KHAN", status: "G", reference: "R - 57" },
    { id: "1 - A - 85", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 86", name: "MR. FAZLE MAULA S/O FAZAL MOHAMMAD", status: "G + 1", reference: "R - 466" },
    { id: "1 - A - 87", name: "MR. ZULFIQAR ALI S/O MEHRAB BHUTTO", status: "G + 1", reference: "R - 28" },
    { id: "1 - A - 88", name: "MRS. FOUZIA W/O M. ZUBAIR MAIRAJ", status: "G + 1", reference: "R - 527" },
    { id: "1 - A - 89", name: "MR. M. ANEES S/O M. RAFIQ", status: "G + 1", reference: "U C R - 332" },
    { id: "1 - A - 90", name: "MR. ZAKA UDDIN S/O JAWAID TARIQ", status: "G + 1", reference: "R - 334" },
    { id: "1 - A - 91", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 92", name: "MR. M. ASIM S/O HAMEED ULLAH", status: "G + 1", reference: "R - 397" },
    { id: "1 - A - 93", name: "MRS. TAHIRA KHATOON W/O ALI AKHTER", status: "G", reference: "R -537" },
    { id: "1 - A - 94", name: "MRS. HUMERA SHIRAZI W/O SAEED UR REHMAN", status: "G", reference: "R - 520" },
    { id: "1 - A - 95", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 96", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 97", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 98", name: "MR. S. MASOOD HASAN ZAIDI S/O LAIQ AHMED ZAIDI", status: "G", reference: "R - 503" },
    { id: "1 - A - 99", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 100", name: "MRS. SABIRA BEGUM W/O M. ASHRAF", status: "G", reference: "R - 297" },
    { id: "1 - A - 101", name: "MRS. SAIMA ADNAN W/O ADNAN USMANI", status: "G + 1", reference: "R - 45" },
    { id: "1 - A - 102", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 103", name: "MR. M. AMIR S/O M. ARIF", status: "G + 1", reference: "R - 363" },
    { id: "1 - A - 104", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 105", name: "MR. SULEMAN S/O ABDUL KARIM", status: "G + 1", reference: "R - 318" },
    { id: "1 - A - 106", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 107", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 108", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 109", name: "MR. YAR MOHAMMAD KHAN S/O PIRA KHAN", status: "G + 1", reference: "R - 40" },
    { id: "1 - A - 110", name: "MR. M. IMRAN S/O ABDUL SALAM", status: "G + 2", reference: "R - 274" },
    { id: "1 - A - 111", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 112", name: "MR. M. ALTAF QADIR S/O", status: "G + 1", reference: "R - 501" },
    { id: "1 - A - 113", name: "MRS. FARIHA MAHMOOD W/O MAHMOOD UL HAQ SIDDIQI", status: "G + 1", reference: "R - 150" },
    { id: "1 - A - 114", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 115", name: "MR. MAHMOOD S/O ABDUL MAJEED", status: "G + 1", reference: "R - 238" },
    { id: "1 - A - 116", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 117", name: " MRS. SHOUMAILA BIBI D/O MOHAMMAD SHER KHAN", status: "G + 1", reference: "R - 235" },
    { id: "1 - A - 118", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 119", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 120", name: "MR. M. TARIQ BAWANI S/O M. HANIF BAWANI", status: "G + 1", reference: "R - 234" },
    { id: "1 - A - 121", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 122", name: "MR. ABDUL FAREED SIDDIQI S/O ABDUL AZIZ", status: "G + 1", reference: "R - 239" },
    { id: "1 - A - 123", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 124", name: "MR. M. SALEEM S/O HAROON AHMED", status: "G + 2", reference: "R - 225" },
    { id: "1 - A - 125", name: "MR. REHAN UMER S/O M. IDREES", status: "G + 1", reference: "R - 71" },
    { id: "1 - A - 126", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 127", name: "MR. M. ASLAM S/O M. A. RAZZAK", status: "G + 2", reference: "R - 398" },
    { id: "1 - A - 128", name: " MR. WAQAR AHMED QURESHI S/O M. ANSAR", status: "G + 2", reference: "R - 416" },
    { id: "1 - A - 129", name: " MR. RAHEEL AHMED QURESHI S/O M. ANSAR", status: "G + 1", reference: "R - 386" },
    { id: "1 - A - 130", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 131", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 132", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 133", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 134", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 135", name: "", status: "Plot",reference: "" },
    { id: "1 - A - 136", name: "", status: "Plot",reference: "" },
    
    
    ]
  