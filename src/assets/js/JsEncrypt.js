import JsEncrypt from 'jsencrypt'

export default {
  // 加密1024
  encrypt(obj) {
    let publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDeFqs6BJOWFQnJ0s0q/VU44KBg0ePJYvCT1YNiJO3pu+a7690yoFcgVioZq0J6pNbxv8FlMYv1IXuZDNlJQHBpQnJF/CUj1iOCJHx0wGcNthR6wph04BinnM+p6WVgpzdzBPH0d7ZzoVDoG+iTcXON0khzI8JNKNB1ncq3GLbG2QIDAQAB";
    let encrypt = new JsEncrypt();
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(obj);
  },
  // 解密2048
  decrypt(obj) {
    let privateKey = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCBKMK21f+NQEfIrVS0k5a9yQcc21skgIxHKxlaD3+lnxO5c84Mgn7BLJXg9tosia9qV/rSJF1sJj3qqVlqYX8ES9xJwKEfB4n+l/8BPopQOMXBdOcKPXyL4XNyTcypKbv7eR1RiwnPkS3sYaUeafC9MMWJtEAzhRtKt6v4oJ1GVqBfTNjiyMvCM/zzJj2OapBD7QIqvYa5th4WVGQBw2JCkAHINbE2xPH8zYUbUGiDkR7eQCpkoqsw5p/kT3A3xBPskOpMhSz1BXTrpgsfnneH3Dme1KMbsmq3xZaSC5956m80CLaeMcnp/WYQqy0CTLCOjs3Xt6jC7cjsFP9q2qgvAgMBAAECggEADm6ai0mQO51SKBdOHrtbHavH0q6kGYkPo6gqNgkDT2NeFdvdy0INndI4kSGkMVPVOQHJsg+ELOB9DKqNpjhss/MyEz+mAUybW8pqIR524A3n8vz4EAncz9iKSNxuoPxb1/apkwIBP6NOSVqD08kssEcx23g7sEYQTaIGYkq4KDK+4xN14df4hHuv3QbAud1i6DACB1Z7RmEF9uEJiPuThTRfWbYQjEMyclIEDvZwrn2XaLPFx2sEyD8jJzz43L6Oohqy+nV507MvwcYHN8HV8Yz5Km1IKn0q/jmXTDUfWI698l9rsMxjN/dL2xqRCXZSiBoxwMxrRifYaGm5LmdNQQKBgQDL9R7OsmeS1U1uIRUJ+6f5TM7nT/ge6+RyQV0uMLMf+YBVDAJREAgQKuvYsHEAjxoa1lWj7QjUMu6pudpqF3n/tHV9M5tBk+h4lNwGjHlHT4AQeNwtwDXnF9hHi6rvCPGq4F9wETbG64UT+cCTaQ1pVyYx18rQJXYSJ/GfzAWtTwKBgQCiHa3HcV9bYOKhZLsbkfyyzpqVgucnYXAONUafAXElWPiVNIw7DJAcUnEzAgPhTDxb8N9JbFn2worOwTFyKEe5PALHExhDpJ4JNICj/gvIutzITLlEmTYOZUgK1AXiDvIJilLAX3ZGNOHUyOjY30qI9U/dKY33dpb7YWBR8oFfIQKBgHk085j8lubA0mInUNx87KcQCUmX0al2oG1yANEpadoPqT9hgqLv9wq8pypAOPePE4FtbLmdbQjGN+UvqOgxiXP3p3a/S33eS2IVfOh7ZLuHOGERoi+iMaZjGknya6PgWdYlvzHXWQk///cODm7MGIdInk8yobmu+Yryp/pCAgGrAoGARURtFgSI++A/tTn3AGa2FChWwH84CQmG+WsmC5ZwI8cKH6ZeLHTHtnI7T9ISmlcaiyY2IYccQWUKLiE54U74plrPzQOJoI1bwQ8fz/IiUtgUsbimiHr2L9xylb3V7ar5G75wcSXYwVKjE2nso410qWQ3hYXV1OBkzm/i2eDGCkECgYEAhlK2UTvJvAmAs9KOStPoU9n8dhXZsY6QeRQiWaS2kD+yDc7/shzh6fCh74aNxAh3ADdd9WqC88BFOBqSd8xlpBLoBJd/I+uj9HbJxAWJgCcgLIDxvgbdqeNJMPMnBdm3jPMb2lc01s3wzvOME1rNzRqsif59jdUUc93xYBebsBw=";
    let decrypt = new JsEncrypt();
    decrypt.setPrivateKey(privateKey);
    return decrypt.decrypt(obj);
  }
};