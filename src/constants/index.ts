import { randomBytes } from "crypto";

// 0.05 MiB String with random characters
export const SIMPLE_DATA = randomBytes(0.05 * 1024 * 1024).toString("hex");

export const PORT = process.env.CALL_PORT;

export const COMPLEX_DATA = {
  credentialSubject: {
    accomplishmentType: "Developer Certificate",
    learnerName: "John Doe",
    achievement: "Certified Solidity Developer 2",
    courseProvider: "https://blockchain-lab.um.si/",
    id: "did:web:example.johndoe.com",
  },
  issuer: {
    id: "did:jwk:eyJhbGciOiJFUzI1NksiLCJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsInVzZSI6InNpZyIsIngiOiJlU01sN3BRMWRfX0JzOEpYM1lKb1V3ZVpyTFZ2Zm1TSEUzdG9IenMwbnpjIiwieSI6IlNoajV1M0ZiQkNEZnpEX1lFSW5tVmRWUmdNVU9PdGV3X0lsZEpwT2duaWMifQ",
  },
  type: ["VerifiableCredential", "ProgramCompletionCertificate"],
  credentialSchema: {
    id: "https://beta.api.schemas.serto.id/v1/public/program-completion-certificate/1.0/json-schema.json",
    type: "JsonSchemaValidator2018",
  },
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://beta.api.schemas.serto.id/v1/public/program-completion-certificate/1.0/ld-context.json",
  ],
  issuanceDate: "2023-06-26T07:05:39.000Z",
  proof: {
    type: "JwtProof2020",
    jwt: "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vYmV0YS5hcGkuc2NoZW1hcy5zZXJ0by5pZC92MS9wdWJsaWMvcHJvZ3JhbS1jb21wbGV0aW9uLWNlcnRpZmljYXRlLzEuMC9sZC1jb250ZXh0Lmpzb24iXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIlByb2dyYW1Db21wbGV0aW9uQ2VydGlmaWNhdGUiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsiYWNjb21wbGlzaG1lbnRUeXBlIjoiRGV2ZWxvcGVyIENlcnRpZmljYXRlIiwibGVhcm5lck5hbWUiOiJKb2huIERvZSIsImFjaGlldmVtZW50IjoiQ2VydGlmaWVkIFNvbGlkaXR5IERldmVsb3BlciAyIiwiY291cnNlUHJvdmlkZXIiOiJodHRwczovL2Jsb2NrY2hhaW4tbGFiLnVtLnNpLyJ9LCJjcmVkZW50aWFsU2NoZW1hIjp7ImlkIjoiaHR0cHM6Ly9iZXRhLmFwaS5zY2hlbWFzLnNlcnRvLmlkL3YxL3B1YmxpYy9wcm9ncmFtLWNvbXBsZXRpb24tY2VydGlmaWNhdGUvMS4wL2pzb24tc2NoZW1hLmpzb24iLCJ0eXBlIjoiSnNvblNjaGVtYVZhbGlkYXRvcjIwMTgifX0sInN1YiI6ImRpZDp3ZWI6ZXhhbXBsZS5qb2huZG9lLmNvbSIsIm5iZiI6MTY4Nzc2MzEzOSwiaXNzIjoiZGlkOmp3azpleUpoYkdjaU9pSkZVekkxTmtzaUxDSmpjbllpT2lKelpXTndNalUyYXpFaUxDSnJkSGtpT2lKRlF5SXNJblZ6WlNJNkluTnBaeUlzSW5naU9pSmxVMDFzTjNCUk1XUmZYMEp6T0VwWU0xbEtiMVYzWlZweVRGWjJabTFUU0VVemRHOUllbk13Ym5waklpd2llU0k2SWxOb2FqVjFNMFppUWtORVpucEVYMWxGU1c1dFZtUldVbWROVlU5UGRHVjNYMGxzWkVwd1QyZHVhV01pZlEifQ.E-bso-dJCdyQA_-f94E1ZtUA_iyyLt2t27jz_jN53qU9rvhr0q0YBJFXlNIotvkSqUqG1RuVTgxMZaUcG6iYmw",
  },
};
