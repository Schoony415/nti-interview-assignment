

export default function formatNumber (num)  {
    const nfObject = new Intl.NumberFormat('en-US')

    return nfObject.format(num)
}